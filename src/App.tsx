import React from "react";
import { PageWrapper } from "./components/PageWrapper";
import { MenuButton } from "./components/MenuButton";
import { Container } from "./components/LayoutComponents";
import { GlobalStyle } from "./globalstyles";
import { Card } from "./components/Card";

function App() {
  return (
    <PageWrapper>
      <GlobalStyle />
      <MenuButton />
    </PageWrapper>
  );
}

export default App;
