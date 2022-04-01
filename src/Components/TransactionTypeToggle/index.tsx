import { Container } from "./styles";
import {
  HiSwitchVertical,
  HiOutlineArrowSmUp,
  HiOutlineArrowSmDown,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";

interface TransactionTypeProps {
  transactionType: string;
  onTransactionTypeChange: () => void;
}

export function TransactionTypeToggle({
  onTransactionTypeChange,
  transactionType,
}: TransactionTypeProps) {
  return (
    <Container
      onClick={onTransactionTypeChange}
      transactionType={transactionType}
    >
      <HiOutlineCurrencyDollar size={24} />
      {transactionType === "Both" && <HiSwitchVertical size={24} />}
      {transactionType === "Expense" && <HiOutlineArrowSmDown size={24} />}
      {transactionType === "Income" && <HiOutlineArrowSmUp size={24} />}
    </Container>
  );
}
