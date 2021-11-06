import { useEthers, useEtherBalance } from '@usedapp/core';

export function Account() {
    const { activateBrowserWallet, account } = useEthers()
    const etherBalance = useEtherBalance(account)
    return (
      <div>
        {account && <p>Account: {account}</p>}
      </div>
    )
  }