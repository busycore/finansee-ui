import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0.15rem 0.15rem;

    th {
      background: var(--shape);
      color: var(--text-title);
      font-weight: 600;
      font-size: 1.2rem;
      text-align: center;
      line-height: 2rem;
      padding: 0.75rem;
      &:first-child {
        border-top-left-radius: 0.5rem;
      }

      &:last-child {
        border-top-right-radius: 0.5rem;
      }
    }

    tr {
      td {
        padding: 1rem 2rem;
        border: 0;
        text-align: center;
        font-weight: 400;
        font-size: 1rem;
        background: var(--shape);
        border-radius: 0.25rem;
      }

      &:last-child {
        td {
          &:first-child {
            border-bottom-left-radius: 0.5rem;
          }
          &:last-child {
            border-bottom-right-radius: 0.5rem;
          }
        }
      }
    }

    .delete-button {
      background: transparent;
      border: 0;
      color: var(--red);
    }

    .expense {
      color: var(--red);
      font-weight: 600;
      text-align: left;
    }

    .income {
      text-align: left;
      font-weight: 600;
      color: var(--green);
    }
  }
`;
