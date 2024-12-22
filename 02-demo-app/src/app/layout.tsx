import './globals.css';
import { WagmiProvider } from 'wagmi';
import { config } from './config';
import Providers from "./providers";

export const metadata = {
  title: 'ERC20 Web App',
  description: 'Next.jsアプリでERC20トークン送付と外部API実行',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
