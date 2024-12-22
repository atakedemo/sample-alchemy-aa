'use client';

import React, { useState } from 'react';
import { useWalletClient } from 'wagmi';
import { sendErc20Token } from './utils';
import { parseEther, zeroAddress } from 'viem';


export default function SendErc20() {
  const [toAddress, setToAddress] = useState<`0x${string}`>(zeroAddress);
  const [amount, setAmount] = useState('');
  const { data: walletClient } = useWalletClient();
  const [txHash, setTxHash] = useState<string | null>(null);

  const handleSend = async () => {
    if (!walletClient) return alert('ウォレットに接続してください');
    const contractAddress = '0xYourErc20ContractAddress';
    const amountInWei = parseEther(amount);

    try {
      const hash = await sendErc20Token(walletClient, contractAddress, toAddress, amountInWei);
      setTxHash(hash);
    } catch (err) {
      console.error(err);
      alert('送信失敗しました');
    }
  };

  return (
    <div>
      <h1>ERC20トークン送付</h1>
      <input
        type="text"
        placeholder="送付先アドレス"
        value={toAddress}
        onChange={(e) => setToAddress(e.target.value as `0x${string}`)}
      />
      <input
        type="number"
        placeholder="送付量"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleSend}>送信</button>
      {txHash && <p>トランザクションハッシュ: {txHash}</p>}
    </div>
  );
}
