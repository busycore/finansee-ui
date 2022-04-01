import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../Services/api";

export interface Transaction {
  id: string;
  name: string;
  category: string;
  type: string;
  value: number;
  date: Date;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export interface SearchTransactionInput {
  keyword: string;
  type?: string;
  category?: string;
}

type TransactionInput = Omit<Transaction, "id" | "date">;

export interface TransactionsContextData {
  transactions: Transaction[];
  loadTransactions: () => Promise<void>;
  searchTransactions: (search: SearchTransactionInput) => Promise<void>;
  //createTransaction(transaction: TransactionInput): Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {} as Transaction,
  ]);

  const loadTransactions = useCallback(async () => {
    return await api.get("transactions/").then((response) => {
      setTransactions(response.data);
    });
  }, []);

  const searchTransactions = useCallback(
    async (search: SearchTransactionInput) => {
      const searchType = search.type ? `&type=${search.type}` : "";
      const searchKeyword = search.keyword ? `&keyword=${search.keyword}` : "";
      const searchCategory = search.category
        ? `&category=${search.category}`
        : "";
      const searchParams = `transactions/search?${searchKeyword}${searchType}${searchCategory}`;
      console.log(searchParams);

      await api.get(searchParams).then((resp) => {
        setTransactions(resp.data);
      });
    },
    []
  );

  return (
    <TransactionsContext.Provider
      value={{ transactions, loadTransactions, searchTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
