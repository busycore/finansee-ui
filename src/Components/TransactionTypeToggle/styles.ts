import styled from "styled-components";

export interface TransactionTypeToggleProps {
  transactionType: string | "Both" | "Income" | "Expense";
}

export const Container = styled.button<TransactionTypeToggleProps>`
  border: 0;
  min-width: 4rem;
  border-radius: 0.25rem;
  align-self: stretch;
  color: var(--shape);

  margin-right: 1rem;

  background: ${(props) => {
    if (props.transactionType === "Income") return "#56876D";
    if (props.transactionType === "Expense") return "#EE2E31";
    if (props.transactionType === "Both") return "#3A6EA5";
  }};
`;
