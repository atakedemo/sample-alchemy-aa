import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import { Providers } from "./providers";
import { cookieToInitialState } from "@account-kit/core";
import { alchemyConfig } from "./config/alchemyConfig";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demo App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(
    alchemyConfig,
    headers().get("cookie") ?? undefined
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers initialState={initialState}>{children}</Providers>
      </body>
    </html>
  );
}
