import { http, createConfig, createStorage,cookieStorage } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors';

export const config = createConfig({
    ssr:true,
    storage: createStorage({
        storage: cookieStorage,
       }),
    chains: [mainnet, sepolia],
    connectors: [
        injected(),
        // walletConnect({ projectId:'409bb205909a856f017bc9aed5a933d3' }),
        // metaMask(),
        // safe(),
    ],
    transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})