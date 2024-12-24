"use client"

import * as React from 'react';
import { useAccount } from 'wagmi';
import { publicClient, walletClient } from '../../app/config/viemConfig';
import { erc20Abi, parseEther } from 'viem';

export function Erc20Menu() {
  const { address } = useAccount();
  console.log(address)
  const handleTx = async() => {
    const { request } = await publicClient.simulateContract({
        address: '0x0478164eF6Ecf9Daa43bcb9Fa07c189f9a9c795f',
        abi: erc20Abi,
        functionName: 'transfer',
        account: address,
        args: ['0x9bAf0536590Cf54feF9b7c11598ad14028d86842', parseEther('1')],
    })
    await walletClient.writeContract(request);
  }

  return (
    <div>
      <button onClick={()=>{handleTx()}}>Transfer</button>
    </div>
  )
}