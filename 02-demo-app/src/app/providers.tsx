'use client';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { wagmiConfig } from './config/wagmiConfig'
import { ReactNode } from 'react';
import { Provider } from "@/components/ui/provider"

const queryClient = new QueryClient()

export function Providers(props: { children: ReactNode }) {
  return (
    <Provider>
      <WagmiProvider config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
              {props.children}
          </QueryClientProvider>
      </WagmiProvider>
    </Provider>
  );
}