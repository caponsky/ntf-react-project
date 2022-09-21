import React, { useEffect, useState } from 'react';
import Nft from './Nft';
import Table from 'react-bootstrap/Table';
import { useNavigate, useLocation } from 'react-router';
import Button from 'react-bootstrap/esm/Button';
import {ethers} from 'ethers';
import WalletConnector from './WalletConnector';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



export default function NFTList({ route }) {

  const location = useLocation();
  console.log('location', location.state);

  let navigate = useNavigate();
  
  useEffect(() => {
    console.log('route', route)
    if(route) {
      console.log('params', route.params)
    }
  },[route])

  const account = window.ethereum.selectedAddress;
  console.log(account)

  

     // async function getOpenseaItems() {
    //     if (!window.userAddress) { return }
    //     const osContainer = document.getElementById('openseaItems')
  
    //     const items = await fetch(`https://api.opensea.io/api/v1/assets?owner=${window.userAddress}&order_direction=desc&offset=0&limit=50`)
    //       .then((res) => res.json())
    //       .then((res) => {
    //         return res.assets
    //       })
    //       .catch((e) => {
    //         console.error(e)
    //         console.error('Could not talk to OpenSea')
    //         return null
    //       })
  
    //     if (items.length === 0) { return }
  
    //     items.forEach((nft) => {
    //       const { name, image_url, description, permalink } = nft

    //     })
    //   }

    const nfts = 
    [
        {
            id: 1,
            x: 'a1',
            y: 'a2',
            z: 'a3',
            t: 'a4',
            u: 'a5'
        },
        {
            id: 2,
            x: 'b1',
            y: 'b2',
            z: 'b3',
            t: 'b4',
            u: 'a5'
        },
        {
            id: 3,
            x: 'c1',
            y: 'c2',
            z: 'c3',
            t: 'c4',
            u: 'a5'
        },

    ]

    const nftElement= nfts.map(nft => {
        return <Nft key={nft.id} {...nft} />
    })
  return (
    <div style={{padding: '10px'}}>
      <h1></h1>
      <div>
      <DropdownButton id="dropdown-basic-button" title="Connected" size='sm' className='btn1'> 
        <Dropdown.Item href="#/action-1">{account}</Dropdown.Item>
        <Dropdown.Item href="#/action-2">{account && <WalletConnector address={account}/>}</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Disconnect</Dropdown.Item>
      </DropdownButton>
      </div>
      <h1>.</h1>
      
      <div className="col-xs-3">
        <label>Total ammount</label>
        <input className="form-control" id="ex2" type="text" />
      </div>
      <h1>.</h1>
      <Table striped bordered  size="sm" className='cosmetica'>
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
          {nftElement}
        </tbody>
    </Table>
    <Button onClick={() => {navigate('/')}} size='sm'>Back</Button>
    </div>
  )
}
