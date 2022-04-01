import { FormEvent, useCallback, useState } from "react";
import {
  SearchTransactionInput,
  useTransactions,
} from "../../Hooks/transactionsContext";
import { TransactionTypeToggle } from "../TransactionTypeToggle";
import { Container, FormBox } from "./styles";

export function MenuBox() {
  const { searchTransactions } = useTransactions();

  const [transactionType, setTransactionType] = useState("Both");
  const [transactionCategory, setTransactionCategory] = useState("Other");
  const [searchKeyword, setSearchKeyword] = useState("");

  function changeTransactionType() {
    if (transactionType === "Both") setTransactionType("Expense");
    if (transactionType === "Expense") setTransactionType("Income");
    if (transactionType === "Income") setTransactionType("Both");
  }

  const handleSearch = useCallback(
    (evt: FormEvent) => {
      evt.preventDefault();
      const searchObject: SearchTransactionInput = {
        keyword: searchKeyword,
        type: transactionType === "Both" ? "" : transactionType,
        category: transactionCategory,
      };
      searchTransactions(searchObject);
    },
    [searchKeyword, searchTransactions, transactionCategory, transactionType]
  );

  return (
    <Container>
      <h2>Welcome to FinanSee </h2>
      <FormBox onSubmit={handleSearch}>
        <TransactionTypeToggle
          onTransactionTypeChange={changeTransactionType}
          transactionType={transactionType}
        />
        <input
          type="text"
          placeholder="Search"
          value={searchKeyword}
          onChange={(evt) => setSearchKeyword(evt.target.value)}
        />
        <select
          value={transactionCategory}
          onChange={(evt) => setTransactionCategory(evt.target.value)}
        >
          <option value="">Any</option>
          <option value="Food">Food</option>
          <option value="House">House</option>
          <option value="Transport">Transport</option>
          <option value="Salary">Salary</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" className="search-button">
          Search
        </button>
      </FormBox>
    </Container>
  );
}
