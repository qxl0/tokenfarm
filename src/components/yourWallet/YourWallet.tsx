import { Box, Tab } from "@material-ui/core";
import { TabContext, TabList } from "@material-ui/lab";
import { useState } from "react";
import { Token } from "../Main";

interface YourWalletProps {
  supportedTokens: Array<Token>;
}
export const YourWallet = ({ supportedTokens }: YourWalletProps) => {
  const [selectedTokenIndex, setSelectedTokenIndex] = useState<number>(0);
  return (
    <Box>
      <h1>Your wallet</h1>
      <Box>
        <TabContext value={selectedTokenIndex.toString()}>
          <TabList aria-label="stake form tabs">
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
