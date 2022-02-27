import { Container } from "@material-ui/core";
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
      <Container maxWidth="md">
        <div>Hi</div>
      </Container>
    </DAppProvider>
  );
}

export default App;
