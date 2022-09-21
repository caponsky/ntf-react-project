import React, { useState } from 'react';
import {ethers} from 'ethers';
import truncateEthAddress from './truncate';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import WalletConnector from './WalletConnector';


export default function Wallet() {

    let navigate = useNavigate();

    const [error, setError] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);

    const handleConnectWallet = () => {
        if(window.ethereum) {
            console.log('connected')
            window.ethereum.request({method: 'eth_requestAccounts'})
                .then(result => {
                    handleAccountChange(result[0]);
                })
        } else {
            setError('install metamask')
        }
    }

    const handleAccountChange = (newAccount) => {
        setDefaultAccount(newAccount);
    }

    const handleChainChange = () => {
        window.ethereum.reload();
    }

    window.ethereum.on('accountsChanged', handleAccountChange);
    window.ethereum.on('chainChange', handleChainChange);

    
  return (
    <div>
        <h4>
            <div>
            <Button onClick={handleConnectWallet} variant="success" size="sm">Connect Wallet</Button>
            </div>
                Address:
                {defaultAccount && <div>
                {truncateEthAddress(defaultAccount)}
            </div>}
            {defaultAccount && <WalletConnector address={defaultAccount}/>}
        </h4>
        <div>
            <Button 
                onClick={() => {navigate('/nftlist', {state: {test: true}})}}
                size='sm'>
            NFT portofolio
            </Button>
        </div>
    </div>
  )
}
