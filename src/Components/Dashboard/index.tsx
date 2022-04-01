import { MenuBox } from "../MenuBox";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <MenuBox></MenuBox>
      <TransactionsTable></TransactionsTable>
    </Container>
  );
}
