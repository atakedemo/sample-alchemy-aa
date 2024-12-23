"use client";

import { WalletOptions } from '@/components/crypto/wallet-options';
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';

export default function Home() {
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (
    <main>
      <>
        {!isConnected ?
            <>
                <h1>NG!!!</h1>
                <WalletOptions/>
            </> 
            :
            <>
                <h1>NG!!!</h1>
                <button onClick={() => disconnect()}>Disconnect</button>
                <div>
                    {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
                    {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
                </div>
            </> 
        }
      </>
    </main>
  );
}
