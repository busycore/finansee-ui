import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
  position: relative;
  height: 12rem;
`;

export const ShapeDivider = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(190% + 1.5px);
    height: 8rem;
    fill: var(--background);
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1300px;

  padding: 2rem;
  height: 6rem;

  color: var(--text-light);

  display: flex;

  align-items: center;

  h1 {
    margin-left: 1rem;
  }
`;
