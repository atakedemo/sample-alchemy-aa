import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

declare module 'wagmi' { 
    interface Register { 
      config: typeof config 
    } 
} 

export const config = createConfig({
  chains: [mainnet, sepolia],
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
