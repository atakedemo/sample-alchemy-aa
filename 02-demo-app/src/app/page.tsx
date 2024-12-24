"use client";

import { SimpleGrid, Tabs } from "@chakra-ui/react";
import { LuWallet, LuUsers } from "react-icons/lu";
import { DirectTx } from "@/components/crypto/direct-tx";
import { AccountKit } from "@/components/crypto/account-kit"

export default function Home() {
  return (
      <SimpleGrid gap="14" width="full">
        <Tabs.Root lazyMount unmountOnExit defaultValue="tab-1" width="full">
          <Tabs.List>
            <Tabs.Trigger value="tab-1">
              <LuUsers />
              Account Abstraction
            </Tabs.Trigger>
            <Tabs.Trigger value="tab-2">
              <LuWallet />
              Direct Transaction
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab-1">
            <AccountKit />
          </Tabs.Content>
          <Tabs.Content value="tab-2">
            <DirectTx />
          </Tabs.Content>
        </Tabs.Root>
      </SimpleGrid>
  );
}
