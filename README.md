# sample-alchemy-aa

AlchemyのAcount KitによるAAフロントエンドの調査

## My-App構築の流れ（フロントエンド）

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

## デモ用コントラクトの用意

### （初回のみ） Foundryのインストール

```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup

# バージョンを確認
forge --version
> forge 0.3.0 (5a8bd89 2024-12-20T08:45:53.204298000Z)
```

### プロジェクトの立ち上げ

```bash
forge init

# OpenZeppelinをインストール
forge install OpenZeppelin/openzeppelin-contracts
```

### 環境変数の設定

デプロイ用ウォレットの秘密鍵と、Alchmey又はInfuraのノードURLを設定する

```text
PRIVATE_KEY='0x575...'
RPC_URL=https://eth-sepolia.g.alchemy.com/v2/xxx
```

ファイル変更後、下記コマンドで反映

```bash
source .env
```

### コントラクトのデプロイ

```bash
forge script script/deployMyToken.s.sol:DeployMyToken --rpc-url $RPC_URL --broadcast

# 下記出力例

## Setting up 1 EVM.
==========================
Chain 11155111
Estimated gas price: 19.341443841 gwei
Estimated total gas used for script: 708344
Estimated amount required: 0.013700395696109304 ETH
==========================
##### sepolia
✅  [Success] Hash: 0xd11f54c4a5b9457565e279332486d6c368e3788563744d6ac28bf0cbb94a356d
Contract Address: 0x0478164eF6Ecf9Daa43bcb9Fa07c189f9a9c795f
Block: 7336845
Paid: 0.00538306040181672 ETH (544880 gas * 9.879350319 gwei)
✅ Sequence #1 on sepolia | Total Paid: 0.00538306040181672 ETH (544880 gas * avg 9.879350319 gwei)
```

### （任意）コントラクトのVerified

```bash
forge verify-contract --chain-id 11155111 0x0478164eF6Ecf9Daa43bcb9Fa07c189f9a9c795f src/MyToken.sol:MyToken --rpc-url $RPC_URL
```

コントラクトアドレス：0x0478164eF6Ecf9Daa43bcb9Fa07c189f9a9c795f

## 参考

### dAppsの基本実装

* [viem公式](https://viem.sh/docs/getting-started)
* [wagmi公式](https://wagmi.sh/cli/getting-started#next-steps)
* [Github - wagmiv2-playground](https://github.com/POKENA7/wagmiv2-playground/tree/main)
* [【Wagmi v2版】wagmiを使ってMetamaskをNextjsアプリにつないでみた。 #Next.js - Qiita](https://qiita.com/amamiya_dev/items/d0335da3c0ff025c3ffe)
