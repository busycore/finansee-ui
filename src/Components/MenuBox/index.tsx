import { FormEvent, useCallback, useState } from "react";
import {
  SearchTransactionInput,
  useTransactions,
} from "../../Hooks/transactionsContext";
import { TransactionTypeToggle } from "../TransactionTypeToggle";
import { Container, FormBox } from "./styles";

export function MenuBox() {
  const { searchTransactions, createTransaction } = useTransactions();

  //Transaction search

  const [transactionType, setTransactionType] = useState("Both");
  const [transactionCategory, setTransactionCategory] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  function changeTransactionType() {
    if (transactionType === "Both") setTransactionType("Expense");
    if (transactionType === "Expense") setTransactionType("Income");
    if (transactionType === "Income") setTransactionType("Both");
  }

  //Transaction creation

  const [transactionTypeCreation, setTransactionTypeCreation] =
    useState("Expense");
  const [transactionCategoryCreation, setTransactionCategoryCreation] =
    useState("Food");
  const [transactionNameCreation, setTransactionNameCreation] = useState("");
  const [transactionValueCreation, setTransactionValueCreation] = useState(0);
  const [transactionDateCreation, setTransactionDateCreation] = useState(
    new Date().toDateString()
  );

  function changeTransactionTypeCreation() {
    if (transactionTypeCreation === "Expense")
      setTransactionTypeCreation("Income");
    if (transactionTypeCreation === "Income")
      setTransactionTypeCreation("Expense");
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

  const handleCreation = useCallback(
    (evt: FormEvent) => {
      evt.preventDefault();
      const newTransaction = {
        name: transactionNameCreation,
        type: transactionTypeCreation,
        value: transactionValueCreation,
        category: transactionCategoryCreation,
        date: transactionDateCreation,
      };

      createTransaction(newTransaction);
    },
    [
      createTransaction,
      transactionCategoryCreation,
      transactionDateCreation,
      transactionNameCreation,
      transactionTypeCreation,
      transactionValueCreation,
    ]
  );

  return (
    <Container>
      <h2>Welcome to FinanSee </h2>
      <h3>Search Transactions</h3>
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
      <h3>Insert a new Transaction</h3>
      <FormBox onSubmit={handleCreation}>
        <TransactionTypeToggle
          onTransactionTypeChange={changeTransactionTypeCreation}
          transactionType={transactionTypeCreation}
        />
        <input
          type="text"
          placeholder="Name"
          value={transactionNameCreation}
          onChange={(evt) => setTransactionNameCreation(evt.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          step="any"
          value={transactionValueCreation}
          onChange={(evt) =>
            setTransactionValueCreation(Number(evt.target.value))
          }
        />
        <input
          type="date"
          placeholder="Date"
          value={transactionDateCreation}
          onChange={(evt) => setTransactionDateCreation(evt.target.value)}
        />
        <select
          value={transactionCategoryCreation}
          onChange={(evt) => setTransactionCategoryCreation(evt.target.value)}
        >
          <option value="Food">Food</option>
          <option value="House">House</option>
          <option value="Transport">Transport</option>
          <option value="Salary">Salary</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" className="add-button">
          +
        </button>
      </FormBox>
    </Container>
  );
}
