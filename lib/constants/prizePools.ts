import { APP_ENVIRONMENT } from '@pooltogether/hooks'
import { NETWORK } from '@pooltogether/utilities'

export const PRIZE_POOLS = Object.freeze({
  [APP_ENVIRONMENT.mainnets]: {
    [NETWORK.mainnet]: '',
    [NETWORK.polygon]: ''
  },
  [APP_ENVIRONMENT.testnets]: {
    [NETWORK.rinkeby]: '0xF0700F52F3ac42Dc88AD7134b40b20eD528ec856',
    [NETWORK.mumbai]: '0x728D7D11094940eF1b7296D406e96332D8cbd1B8'
  }
})
