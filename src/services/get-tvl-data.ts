
import gql from 'graphql-tag';

import apolloFetcher from './apollo-fetcher';
import { IMPERMAX_SUBGRAPH_URL } from 'config/web3/subgraph';
import { TvlData } from 'types/interfaces';

const query = gql`{
  impermaxFactories(first: 1) {
    totalBalanceUSD
    totalSupplyUSD
    totalBorrowsUSD
  }
}`;

/**
 * TODO:
 * - could be a hook
 * - could use SWR or react-query
 */

const getTVLData = async (chainID: number): Promise<TvlData> => {
  const impermaxSubgraphURL = IMPERMAX_SUBGRAPH_URL[chainID];
  const result = await apolloFetcher(impermaxSubgraphURL, query);

  return result.data.impermaxFactories[0];
};

export default getTVLData;