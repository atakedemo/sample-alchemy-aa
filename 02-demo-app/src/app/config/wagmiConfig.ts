import { http, createConfig, createStorage,cookieStorage } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { metaMask, walletConnect } from 'wagmi/connectors';

export const wagmiConfig = createConfig({
    ssr:true,
    storage: createStorage({
        storage: cookieStorage,
       }),
    chains: [mainnet, sepolia],
    connectors: [
        walletConnect({ projectId:'409bb205909a856f017bc9aed5a933d3' }),
        metaMask(),
    ],
    transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})