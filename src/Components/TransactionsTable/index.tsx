import { Container } from "./styles";
import { HiOutlineXCircle } from "react-icons/hi";
import { useEffect } from "react";
import { useTransactions } from "../../Hooks/transactionsContext";

export function TransactionsTable() {
  const { transactions, loadTransactions, deleteTransaction } =
    useTransactions();

  useEffect(() => {
    loadTransactions();
  }, []);

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
                <button
                  onClick={() => {
                    deleteTransaction(transaction.id);
                  }}
                  className="delete-button"
                >
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
