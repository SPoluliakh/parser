import styled from "styled-components";

export const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  button {
    width: 120px;
    padding: 8px;
    border-radius: 6px;
  }

  .clearBtn {
    background-color: red;
    margin-right: 8px;
  }

  .loadBtn {
    background-color: yellow;
  }
`;
