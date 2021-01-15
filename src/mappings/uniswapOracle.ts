import { Exchange } from '../types/schema'
import { BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'
import { equalToZero, zeroBD } from '../helpers'

export function uniswapUSDOracle(blockNum: BigInt): BigDecimal {

  const USDJ_EXCHANGE = '0xbf9196ba38d4164d6e348c3784506936d2f17f25'
  const USDJ_BLOCK_CONTRACT_CREATION = 19428202 // first block after a non-trivial amount of liquidity was added

  const USDT_EXCHANGE = '0xd337e17c5bc42b9e81ca36dcbe1076c2c094707e'
  const USDT_BLOCK_CONTRACT_CREATION = 20752861 // first block after a non-trivial amount of liquidity was added

  let oneUSDInEth: BigDecimal
  const blockNumInt = blockNum.toI32()

  if (blockNumInt > USDJ_BLOCK_CONTRACT_CREATION) {
    const usdjExchange = Exchange.load(USDJ_EXCHANGE)
    const usdjPrice = usdjExchange.price
 
    const averagePrice = usdjPrice
    if (!equalToZero(averagePrice)) {
      oneUSDInEth = BigDecimal.fromString('1').div(averagePrice)
    } else {
      oneUSDInEth = zeroBD()
    }
    return oneUSDInEth
  } else if (blockNumInt > USDT_BLOCK_CONTRACT_CREATION) {
    const usdtExchange = Exchange.load(USDT_EXCHANGE)
    const usdtPrice = usdtExchange.price
    const usdjExchange = Exchange.load(USDJ_EXCHANGE)
    const usdjPrice = usdjExchange.price
 
    const averagePrice = usdtPrice
      .plus(usdjPrice)
      .div(BigDecimal.fromString('2'))

    if (!equalToZero(averagePrice)) {
      oneUSDInEth = BigDecimal.fromString('1').div(averagePrice)
    } else {
      oneUSDInEth = zeroBD()
    }
    return oneUSDInEth
  } else {
    // for events before the usdj exchange was made
    oneUSDInEth = BigDecimal.fromString('0')
    return oneUSDInEth
  }
}
