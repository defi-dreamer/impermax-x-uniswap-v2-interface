
import React, { createContext } from 'react';
import { Networks } from 'utils/connections';
import {
  IMX,
  WETH,
  ROUTER,
  Address,
  FACTORY,
  SIMPLE_UNISWAP_ORACLE,
  AIRDROP_URL,
  MERKLE_DISTRIBUTOR,
  CLAIM_AGGREGATOR,
  DistributorDetails,
  DISTRIBUTORS,
  IMPERMAX_SUBGRAPH_URL,
  UNISWAP_V2_FACTORY
} from 'utils/constants';

// ray test touch <
const NETWORK = process.env.REACT_APP_NETWORK as Networks;

const context : NetworkI = {
  impermaxSubgraphUrl: IMPERMAX_SUBGRAPH_URL[NETWORK],
  IMX: IMX[NETWORK],
  WETH: WETH[NETWORK],
  routerAddress: ROUTER[NETWORK],
  factoryAddress: FACTORY[NETWORK],
  uniswapV2FactoryAddress: UNISWAP_V2_FACTORY[NETWORK],
  simpleUniswapOracleAddress: SIMPLE_UNISWAP_ORACLE[NETWORK],
  merkleDistributorAddress: MERKLE_DISTRIBUTOR[NETWORK],
  claimAggregatorAddress: CLAIM_AGGREGATOR[NETWORK],
  airdropUrl: AIRDROP_URL[NETWORK],
  distributors: DISTRIBUTORS[NETWORK]
};
// ray test touch >

const NetworkProvider: React.FC = ({ children }) => {
  return <NetworkContext.Provider value={context}>{children}</NetworkContext.Provider>;
};

export interface NetworkI {
  impermaxSubgraphUrl: string;
  IMX: Address;
  WETH: Address;
  routerAddress: Address;
  factoryAddress: Address;
  uniswapV2FactoryAddress: Address;
  simpleUniswapOracleAddress: Address;
  merkleDistributorAddress: Address;
  claimAggregatorAddress: Address;
  airdropUrl: string;
  distributors: DistributorDetails[];
}

export const NetworkContext = createContext<NetworkI>(context);

export default NetworkProvider;