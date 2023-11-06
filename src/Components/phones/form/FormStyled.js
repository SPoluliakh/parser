import styled from "styled-components";

export const FormStyled = styled.div`
  text-align: center;

  grid-area: "innerWrapper";

  .formArea {
    outline: none;
    min-height: 200px;
    width: 100%;
    @media (min-width: 768px) {
      height: calc(100vh - 60px);
      padding: 5px;
    }

    resize: none;
  }
`;
