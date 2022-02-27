import { ChainId, DAppProvider } from "@usedapp/core";

function App() {
  return (
    <DAppProvider
      config={{
        supportedChains: [ChainId.Kovan, ChainId.Rinkeby],
      }}
    >
      <div className="App">Hi</div>
    </DAppProvider>
  );
}

export default App;
