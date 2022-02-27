import { ChainId, DAppProvider } from "@usedapp/core";
import { Header } from "./components/Header";

function App() {
  return (
    <DAppProvider
      config={{
        supportedChains: [ChainId.Kovan, ChainId.Rinkeby],
      }}
    >
      <Header />
    </DAppProvider>
  );
}

export default App;
