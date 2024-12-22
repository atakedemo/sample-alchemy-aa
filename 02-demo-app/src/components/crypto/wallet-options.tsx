"use client"

import * as React from 'react';
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';

export function WalletOptions() {
  const { connectors, connect } = useConnect();
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address })

  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({ connector })}>
        {connector.name}
    </button>
  ))
}