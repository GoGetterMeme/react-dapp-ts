import React from 'react';
import Main from "./features/Main";
import { ChainId, DAppProvider } from "@usedapp/core"

function App() {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Rinkeby],
      notifications: {
        expirationPeriod: 1000,
        checkInterval: 1000
      }
    }}>
      <Main />
    </DAppProvider>
  );
}

export default App;
