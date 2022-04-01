import { Container } from "./styles";
import {
  HiSwitchVertical,
  HiOutlineArrowSmUp,
  HiOutlineArrowSmDown,
} from "react-icons/hi";
import { useState } from "react";

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
      {transactionType === "Both" && <HiSwitchVertical size={32} />}
      {transactionType === "Expense" && <HiOutlineArrowSmDown size={32} />}
      {transactionType === "Income" && <HiOutlineArrowSmUp size={32} />}
    </Container>
  );
}
