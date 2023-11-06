import React from "react";
import { ButtonGroupStyled } from "./ButtonGroupStyled";

const ButtonGroup = ({ getCSV }) => {
  return (
    <ButtonGroupStyled>
      <button className="loadBtn" type="button" onClick={getCSV}>
        Create CSV
      </button>
    </ButtonGroupStyled>
  );
};

export default ButtonGroup;
