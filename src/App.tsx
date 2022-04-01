import React from "react";
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { TransactionsProvider } from "./Hooks/transactionsContext";
import { GlobalStyle } from "./styles/globals";

function App() {
  return (
    <TransactionsProvider>
      <Header></Header>
      <Dashboard></Dashboard>
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
