# sample-alchemy-aa

AlchemyのAcount KitによるAAフロントエンドの調査

## My-App構築の流れ

```bash
npx create-next-app@14.2.4 02-demo-app --typescript
```

```bash
npm install viem wagmi ethers axios dotenv @tanstack/react-query

npm install @chakra-ui/react @emotion/react
npx @chakra-ui/cli snippet add

npm install @account-kit/infra @account-kit/react @tanstack/react-query
npm install -D tailwindcss postcss autoprefixer
```

## 参考

### dAppsの基本実装

* [Github - wagmiv2-playground](https://github.com/POKENA7/wagmiv2-playground/tree/main)
* [【Wagmi v2版】wagmiを使ってMetamaskをNextjsアプリにつないでみた。 #Next.js - Qiita](https://qiita.com/amamiya_dev/items/d0335da3c0ff025c3ffe)
