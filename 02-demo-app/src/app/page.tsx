"use client";

import { SimpleGrid, Tabs } from "@chakra-ui/react";
import { LuWallet, LuUsers } from "react-icons/lu";
import { DirectTx } from "@/components/crypto/direct-tx";
import { AccountKit } from "@/components/crypto/account-kit"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4 justify-center text-center">
      <div className="flex flex-col gap-2 p-2">
        <AccountKit />
      </div>
    </main>
  );
}
