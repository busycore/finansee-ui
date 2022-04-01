import React from "react";
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { GlobalStyle } from "./styles/globals";

function App() {
  return (
    <>
      <Header></Header>
      <Dashboard></Dashboard>
      <GlobalStyle />
    </>
  );
}

export default App;
