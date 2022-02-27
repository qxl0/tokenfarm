import { useEthers } from "@usedapp/core";

export const Header = () => {
  const { account, activateBrowserWallet, deactivate } = useEthers();
  const isConnected = account !== undefined;

  return (
    <div>
      {isConnected ? (
        <button color="primary" onClick={deactivate}>
          Disconnect
        </button>
      ) : (
        <button onClick={activateBrowserWallet}>Connect</button>
      )}
    </div>
  );
};
