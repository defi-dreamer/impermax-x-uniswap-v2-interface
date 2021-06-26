
import * as React from 'react';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import ErrorModal from 'components/ErrorModal';
import ImpermaxJadeContainedButton from 'components/buttons/ImpermaxJadeContainedButton';
import useEagerConnect from 'utils/hooks/web3/use-eager-connect';
import useInactiveListener from 'utils/hooks/web3/use-inactive-listener';
import { injected } from 'utils/helpers/web3/connectors';
import getBlockchainNetworkErrorMessage from 'utils/helpers/web3/get-blockchain-network-error-message';

const WalletConnect = (): JSX.Element => {
  const {
    connector,
    activate,
    deactivate,
    active,
    error
  } = useWeb3React<Web3Provider>();

  // Handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>();

  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [
    activatingConnector,
    connector
  ]);

  // Handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // Handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  const currentConnector = injected;
  const activating = currentConnector === activatingConnector;
  const connected = currentConnector === connector;
  const connectDisabled = !triedEager || !!activatingConnector || connected || !!error;

  const handleActivate = () => {
    setActivatingConnector(currentConnector);
    activate(injected);
  };

  const handleDeactivate = () => {
    deactivate();
  };

  return (
    <>
      {(active || error) ? (
        <ImpermaxJadeContainedButton
          style={{
            height: 36
          }}
          onClick={handleDeactivate}>
          Disconnect Wallet
        </ImpermaxJadeContainedButton>
      ) : (
        <ImpermaxJadeContainedButton
          style={{
            height: 36
          }}
          disabled={connectDisabled || activating}
          onClick={handleActivate}>
          Connect Wallet
        </ImpermaxJadeContainedButton>
      )}
      {!!error && (
        <ErrorModal
          open={!!error}
          onClose={handleDeactivate}
          title='Connection Failed'
          description={getBlockchainNetworkErrorMessage(error)} />
      )}
    </>
  );
};

export default WalletConnect;
