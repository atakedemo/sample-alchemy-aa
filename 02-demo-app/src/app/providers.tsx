'use client';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { wagmiConfig } from './config/wagmiConfig';
import { ReactNode } from 'react';
// import { Provider } from "@/components/ui/provider";
import { alchemyConfig } from "./config/alchemyConfig";
import { AlchemyClientState } from "@account-kit/core";
import { AlchemyAccountProvider } from "@account-kit/react";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient()

export function Providers(props: { 
  children: ReactNode,
  initialState?: AlchemyClientState
}) {
  return (
    
    <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <AlchemyAccountProvider
            config={alchemyConfig}
            queryClient={queryClient}
            initialState={props.initialState}
          >
            {props.children}
          </AlchemyAccountProvider>
        </QueryClientProvider>
    </WagmiProvider>
   
  );
}