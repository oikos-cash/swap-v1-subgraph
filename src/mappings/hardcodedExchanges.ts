export class AsExchange {
  symbol: string
  name: string
  tokenAddress: string
  tokenDecimals: i32
  exchangeAddress: string
}

export const hardcodedExchanges: Array<AsExchange> = [
  {
    symbol: 'OKS',
    name: 'Oikos',
    tokenAddress: '0xc6521615602b1a4317fd946f234671ab3f994673',
    tokenDecimals: 18,
    exchangeAddress: '0xc6521615602b1a4317fd946f234671ab3f994673'
  },
  {
    symbol: 'sTRX',
    name: 'Synth TRX',
    tokenAddress: '0xa099cc498284ed6e25f3c99e6d55074e6ba42911',
    tokenDecimals: 18,
    exchangeAddress: '0xcd68af7ea323057bdd92ccd36aad2c4bb6b4ef48'
  },
  {
    symbol: 'USDJ',
    name: 'Just Stable coin',
    tokenAddress: '0x834295921a488d9d42b4b3021ed1a3c39fb0f03e',
    tokenDecimals: 18,
    exchangeAddress: '0xbf9196ba38d4164d6e348c3784506936d2f17f25'
  },
  {
    symbol: 'sUSD',
    name: 'Synth USD',
    tokenAddress: '0xda2853b2bede0e3018f56d47624a413b2abe0831',
    tokenDecimals: 18,
    exchangeAddress: '0x6a6f4ad0e5b95d14b03c31a7c4411555f807a922'
  },
  {
    symbol: 'sETH',
    name: 'Synth ETH',
    tokenAddress: '0xa1402557c4c7a50f958e15c0527a60bf6666c77e',
    tokenDecimals: 18,
    exchangeAddress: '0x54f6ac1482ba0d6c64cb6cec18d6c9ecce6146a9'
  },
  {
    symbol: 'USDT',
    name: 'Tether Dollar',
    tokenAddress: '0xa614f803b6fd780986a42c78ec9c7f77e6ded13c',
    tokenDecimals: 6,
    exchangeAddress: '0xd337e17c5bc42b9e81ca36dcbe1076c2c094707e'
  }
]
