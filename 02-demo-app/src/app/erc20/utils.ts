'use server'

import { createPublicClient, WalletClient, http, erc20Abi } from 'viem';
import { sepolia } from 'wagmi/chains';

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});

export const sendErc20Token = async (
  walletClient: WalletClient,
  contractAddress: `0x${string}`,
  toAddress: `0x${string}`,
  amount: bigint
) => {
  const abi = [erc20Abi];

  const { result } = await publicClient.simulateContract({
    account: walletClient.account,
    address: contractAddress,
    abi,
    functionName: 'transfer',
    args: [toAddress, amount],
  });

  const hash = await walletClient.sendTransaction(result);
  return hash;
};
