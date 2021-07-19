
import { CHAIN_IDS } from 'config/web3/chains';

const UNISWAP_V2_FACTORY_ADDRESSES: {
  [chainId: number]: string;
} = {
  [CHAIN_IDS.ROPSTEN]: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
  [CHAIN_IDS.ETHEREUM_MAIN_NET]: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f'
};

export {
  UNISWAP_V2_FACTORY_ADDRESSES
};