"use client"

import * as React from 'react';
import { useAccount } from 'wagmi';
import { publicClient } from '../../app/config/viemConfig';
import { erc20Abi, parseEther } from 'viem';

export function WalletOptions() {
  const { address } = useAccount();
  const handleTx = async() => {
    const { result } = await publicClient.simulateContract({
        address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
        abi: erc20Abi,
        functionName: 'transfer',
        account: address,
        args: ['0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2', parseEther('0.0001')],
    })
  }

  return (
    <div>sss</div>
  )
}