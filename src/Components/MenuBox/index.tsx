import { Container, FormBox } from "./styles";

export function MenuBox() {
  return (
    <Container>
      <h2>Welcome to FinanSee </h2>
      <FormBox>
        <input type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </FormBox>
    </Container>
  );
}
