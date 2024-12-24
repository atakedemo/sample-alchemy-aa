"use client"

import * as React from 'react';
import { useAccount, useConnect } from 'wagmi';
import { Button } from "@/components/ui/button";
import { Stack } from "@chakra-ui/react";

export function WalletOptions() {
  const { connectors, connect } = useConnect();

  return (
    <Stack gap="2" align="flex-start">
      <>
        {
          connectors.map((connector) => (
            <Button
              key={connector.uid} 
              onClick={() => connect({ connector })}
              gap="10"
            >
              {connector.name}
            </Button>
          ))
        }
      </>
    </Stack>
  )
}