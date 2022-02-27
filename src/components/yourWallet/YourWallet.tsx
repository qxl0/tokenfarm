import { Box, Tab } from "@material-ui/core";
import { TabContext, TabList } from "@material-ui/lab";
import React, { useState } from "react";
import { Token } from "../Main";

interface YourWalletProps {
  supportedTokens: Array<Token>;
}
export const YourWallet = ({ supportedTokens }: YourWalletProps) => {
  const [selectedTokenIndex, setSelectedTokenIndex] = useState<number>(0);
  const handleChange = (e: React.ChangeEvent<{}>, newValue: string) => {
    setSelectedTokenIndex(parseInt(newValue));
  };
  return (
    <Box>
      <h1>Your wallet</h1>
      <Box>
        <TabContext value={selectedTokenIndex.toString()}>
          <TabList onChange={handleChange} aria-label="stake form tabs">
            {supportedTokens.map((token, index) => {
              return (
                <Tab
                  label={token.name}
                  value={index.toString()}
                  key={index}
                ></Tab>
              );
            })}
          </TabList>
        </TabContext>
      </Box>
    </Box>
  );
};
