import React from 'react'

export default function Nft(props) {

    const 
    {
        id,
        x,
        y,
        z,
        t,
        u
    } = props

  return (
    <>
        <tr>
            <td>{id}</td>
            <td>{x}</td>
            <td>{y}</td>
            <td>{z}</td>
            <td>{t}</td>
            <td>{u}</td>
        </tr>
    </>
  )
}
