# react-ens-avatar

React component for ENS avatar image display with emoji as fallback. The package uses ENS avatar API to resolve all of the possible avatar formats (IPFS, Arweave, etc).

## Install

```sh
pnpm i react-ens-avatar
```

## Usage

```jsx
import { ENSAvatar } from 'react-ens-avatar'

const App = () => {
  return (
    <ENSAvatar
      domain="v1rtl.eth"
      address="0xD3B282e9880cDcB1142830731cD83f7ac0e1043f"
      avatar="ipfs://bafkreia4t7isswz3fpqzwc7rokd5m7rd3dom7aavcbthxk5fggixncngru"
    />
  )
}
```
