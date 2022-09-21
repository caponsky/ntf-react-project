import React, { useState } from 'react';
import {ethers} from 'ethers';

export default function WalletConnector(props) {
    const [balance, setBalance] = useState(null);

    const getBalance = (address) => {
        window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
            .then(e => {
                setBalance(parseFloat(ethers.utils.formatEther(e)).toFixed(3))
            })
    }

    getBalance(props.address);
  return (
    <div>
        {balance}
    </div>
  )
}
