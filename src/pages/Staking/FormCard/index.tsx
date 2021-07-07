
import * as React from 'react';
import clsx from 'clsx';

import StakingForm from './StakingForm';
import UnstakingForm from './UnstakingForm';
import Tabs, {
  Tab,
  TabPanel
} from 'components/Tabs';

const FormCard = (): JSX.Element => {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);

  const handleTabSelect = (newTabIndex: number) => () => {
    setSelectedTabIndex(newTabIndex);
  };

  return (
    <div
      className={clsx(
        'px-6',
        'py-4',
        'rounded-lg',
        'bg-impermaxBlackHaze-600'
      )}>
      <Tabs>
        <Tab
          id='stake-tab'
          index={0}
          selectedIndex={selectedTabIndex}
          onSelect={handleTabSelect(0)}>
          Stake
        </Tab>
        <Tab
          id='unstake-tab'
          index={1}
          selectedIndex={selectedTabIndex}
          onSelect={handleTabSelect(1)}>
          Unstake
        </Tab>
      </Tabs>
      <TabPanel
        index={0}
        selectedIndex={selectedTabIndex}
        id='stake-tab-panel'>
        <StakingForm />
      </TabPanel>
      <TabPanel
        index={1}
        selectedIndex={selectedTabIndex}
        id='unstake-tab-panel'>
        <UnstakingForm />
      </TabPanel>
    </div>
  );
};

export default FormCard;
