'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors'

export default function HomePage() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const connector = injected();
  const { disconnect } = useDisconnect();
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    try {
      setLoading(true);
      connect({connector});
    } catch (error) {
      console.error('Wallet接続エラー:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDisconnect = async () => {
    try {
      disconnect();
    } catch (error) {
      console.error('Wallet切断エラー:', error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">ERC20 Web App</h1>

      {!isConnected ? (
        <button
          onClick={handleConnect}
          disabled={loading}
          className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? '接続中...' : 'Wallet接続'}
        </button>
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-700 mb-4">
            Wallet接続中: {address}
          </p>
          <div className="flex gap-4 mb-4">
            <Link
              href="/erc20/send"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              ERC20トークン送付
            </Link>
            <Link
              href="/api"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              外部API実行
            </Link>
          </div>
          <button
            onClick={handleDisconnect}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Disconnect
          </button>
        </div>
      )}
    </main>
  );
}
