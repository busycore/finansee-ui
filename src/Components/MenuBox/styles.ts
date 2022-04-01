import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  margin: 0 auto;
  background: var(--shape);
  min-width: 21rem;

  padding: 3rem;
  border-radius: 0.25rem;

  h3 {
    margin-top: 1.5rem;
  }
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

    &:nth-child(n + 1) {
      margin-left: 1rem;
    }
  }

  select {
    padding: 1rem;
    font-size: 1rem;
    margin-left: 1rem;
    border-radius: 0.25rem;
    border: 0;
  }

  button {
    align-self: stretch;
    grid-column: 3;
    font-weight: 600;
    margin-left: 1rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    padding: 0.5rem;
    border: 1 solid var(--text-title);
    background: #3a6ea5;

    min-width: 5rem;

    color: var(--text-light);

    transition: background-color 0.2s;

    &:hover {
      background-color: ${lighten(0.2, "#3A6EA5")};
    }
  }

  button.search-button {
    background: #3a6ea5;

    color: var(--text-light);

    transition: background-color 0.2s;

    &:hover {
      background-color: ${lighten(0.2, "#3A6EA5")};
    }
  }

  button.add-button {
    background: var(--green);

    color: var(--text-light);

    transition: background-color 0.2s;

    &:hover {
      background-color: ${lighten(0.2, "#56876D")};
    }
  }
`;
