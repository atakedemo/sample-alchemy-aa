'use client';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from './config'
import { ReactNode } from 'react';

const queryClient = new QueryClient()

export function Providers(props: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
            {props.children}
        </QueryClientProvider>
    </WagmiProvider>
  );
}