"use client"

import * as React from 'react';
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import { WalletOptions } from '@/components/crypto/wallet-options';
import { Erc20Menu } from '@/components/crypto/erc20';
import { publicClient, walletClient } from '../../app/config/viemConfig';
import { erc20Abi, parseEther } from 'viem';

export function DirectTx() {
    const { isConnected, address } = useAccount();
    const { disconnect } = useDisconnect()
    const { data: ensName } = useEnsName({ address })
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

    return (
        <div>
          <>
            {!isConnected ?
                <>
                    <h1>NG!!!</h1>
                    <WalletOptions/>
                </> 
                :
                <>
                    <h1>OK!!!</h1>
                    <button onClick={() => disconnect()}>Disconnect</button>
                    <div>
                        {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
                        {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
                    </div>
                    <Erc20Menu/>
                </> 
            }
          </>
        </div>
    );
}