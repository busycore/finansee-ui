import { FormEvent, useState } from "react";
import { TransactionTypeToggle } from "../TransactionTypeToggle";
import { Container, FormBox } from "./styles";

export function MenuBox() {
  const [transactionType, setTransactionType] = useState("Both");

  function changeTransactionType() {
    if (transactionType === "Both") setTransactionType("Expense");
    if (transactionType === "Expense") setTransactionType("Income");
    if (transactionType === "Income") setTransactionType("Both");
  }
  function handleSearch(evt: FormEvent) {
    evt.preventDefault();
  }

  return (
    <Container>
      <h2>Welcome to FinanSee </h2>
      <FormBox onClick={handleSearch}>
        <TransactionTypeToggle
          onTransactionTypeChange={changeTransactionType}
          transactionType={transactionType}
        />
        <input type="text" placeholder="Search" />
        <button type="submit" className="search-button">
          Search
        </button>
      </FormBox>
    </Container>
  );
}
