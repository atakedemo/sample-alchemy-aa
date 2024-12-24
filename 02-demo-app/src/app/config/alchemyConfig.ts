// @noErrors
import { createConfig, cookieStorage } from "@account-kit/react";
import { alchemy, sepolia } from "@account-kit/infra";
 
export const alchemyConfig = createConfig(
  {
    transport: alchemy({ apiKey: "gPM_4Q7DsCm-8ci7xO88H1E3v_P6MBiX" }), // TODO: add your Alchemy API key - setup your app and embedded account config in the alchemy dashboard (https://dashboard.alchemy.com/accounts)
    chain: sepolia, // TODO: specify your preferred chain here and update imports from @account-kit/infra
    ssr: true, // Defers hydration of the account state to the client after the initial mount solving any inconsistencies between server and client state (read more here: https://accountkit.alchemy.com/react/ssr)
    storage: cookieStorage, // persist the account state using cookies (read more here: https://accountkit.alchemy.com/react/ssr#persisting-the-account-state)
    enablePopupOauth: true, // must be set to "true" if you plan on using popup rather than redirect in the social login flow
  },
  {
    auth: {
      sections: [
        [{ type: "email" }],
        [
          { type: "passkey" },
          { type: "social", authProviderId: "google", mode: "popup" },
          { type: "social", authProviderId: "facebook", mode: "popup" },
        ],
        // [
        //   {
        //     type: "external_wallets",
        //     walletConnect: { projectId: "your-project-id" },
        //   },
        // ],
      ],
      addPasskeyOnSignup: true,
    },
  }
);