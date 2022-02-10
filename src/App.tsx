import React from "react";
import { PageWrapper } from "./components/PageWrapper";
import { MenuButton } from "./components/MenuButton";
import { Container } from "./components/LayoutComponents";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <PageWrapper>
        <MenuButton />
        <Container>
          <Card>
            <p>Anton Bergwall</p>
          </Card>
        </Container>
      </PageWrapper>
    </>
  );
}

export default App;
