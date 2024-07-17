import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { WagmiProvider } from 'wagmi'
import { arbitrum, bsc, bscTestnet, mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'bca67bd3dc90c2e8781db56f12720eda'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'http://localhost:5173/', // origin must match your domain & subdomain
  icons: ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F295900638027546727%2F&psig=AOvVaw36hJVWMiAXs-QSIaIAKbkr&ust=1715925640610000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCb4qO_kYYDFQAAAAAdAAAAABAE']
}

const chains = [mainnet, arbitrum,bscTestnet,bsc];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})

export function Web3ModalProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}