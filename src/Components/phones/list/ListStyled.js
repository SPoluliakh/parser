import styled from "styled-components";

export const ListStyled = styled.ul`
  width: 100%;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(1, 1fr);
  padding: 8px;
  .listRecomendation {
    width: 100%;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
