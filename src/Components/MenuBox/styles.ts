import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  margin: 0 auto;
  background: var(--shape);
  min-width: 21rem;

  padding: 3rem;
  border-radius: 0.25rem;
`;

export const FormBox = styled.form`
  margin-top: 1rem;
  display: flex;

  align-items: center;

  input {
    border-radius: 0.25rem;
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    border: 1 solid var(--text-body);
  }

  select {
    padding: 1rem;
    font-size: 1rem;
    margin-left: 1rem;
    border-radius: 0.25rem;
    border: 0;
  }

  button.search-button {
    align-self: stretch;
    grid-column: 3;
    font-weight: 600;
    margin-left: 1rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    padding: 0.5rem;
    border: 1 solid var(--text-title);
    background: #3a6ea5;

    color: var(--text-light);

    transition: background-color 0.2s;

    &:hover {
      background-color: ${lighten(0.2, "#3A6EA5")};
    }
  }
`;
