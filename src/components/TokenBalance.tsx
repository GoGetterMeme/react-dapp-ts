import { formatUnits } from '@ethersproject/units'
import { useEthers, useTokenBalance } from '@usedapp/core'

const DAI = '0x6b175474e89094c44da98b954eedeac495271d0f'

export function TokenBalance() {
  const { account } = useEthers()
  const tokenBalance = useTokenBalance(DAI, account)

  return (
    <div>
      {tokenBalance && <p>Balance: {formatUnits(tokenBalance, 18)}</p>}
    </div>
  )
}