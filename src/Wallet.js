import React, { useState } from 'react';
import {ethers} from 'ethers';
import truncateEthAddress from './truncate';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


export default function Wallet() {

    const [error, setError] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [balance, setBalance] = useState(null);

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
        getBalance(newAccount.toString());
    }

    const getBalance = (address) => {
        window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
            .then(e => {
                setBalance(parseFloat(ethers.utils.formatEther(e)).toFixed(3))
            })
    }

    const handleChainChange = () => {
        window.ethereum.reload();
    }

    window.ethereum.on('accountsChanged', handleAccountChange);
    window.ethereum.on('chainChange', handleChainChange);

    
    async function getOpenseaItems() {
        if (!window.userAddress) { return }
        const osContainer = document.getElementById('openseaItems')
  
        const items = await fetch(`https://api.opensea.io/api/v1/assets?owner=${window.userAddress}&order_direction=desc&offset=0&limit=50`)
          .then((res) => res.json())
          .then((res) => {
            return res.assets
          })
          .catch((e) => {
            console.error(e)
            console.error('Could not talk to OpenSea')
            return null
          })
  
        if (items.length === 0) { return }
  
        items.forEach((nft) => {
          const { name, image_url, description, permalink } = nft
  
          const newElement = document.createElement('div')
          
          osContainer.appendChild(newElement)
        })
      }



  return (
    <div>
        <h4>
            <div>
            <Button onClick={handleConnectWallet} variant="success" size="sm">Connet Wallet</Button>
            </div>
                Address:
                {defaultAccount && <div>
                {truncateEthAddress(defaultAccount)}
            </div>}
            <div>
                Balance:{balance}
            </div>
        </h4>
        <div>
            <Button onClick={getOpenseaItems} size='sm'>List NFT's</Button>
        </div>

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Picture</th>
          <th>Collection</th>
          <th>Token ID</th>
          <th>Floor Price</th>
          <th>Highest Offer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>

    </div>
  )
}
