import { Container } from "./styles";
import { HiOutlineXCircle } from "react-icons/hi";
import { api } from "../../Services/api";
import { useEffect, useState } from "react";
import { useTransactions } from "../../Hooks/transactionsContext";

export function TransactionsTable() {
  const { transactions, loadTransactions } = useTransactions();
  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Value</th>
            <th>Date</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.name}</td>
              <td>{transaction.category}</td>
              <td
                className={
                  transaction.type === "Expense" ? "expense" : "income"
                }
              >
                {transaction.type === "Expense" ? "-" : "+"}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(transaction.value)}
              </td>
              <td>{transaction.date}</td>
              <td>
                <button className="delete-button">
                  <HiOutlineXCircle size={24} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
