import React, { useState } from "react";
import { Btn, BtnWrapper, FormStyled } from "./FormStyled";

const Form = ({ prepareData, getCSV, isGetCsv }) => {
  const [text, setText] = useState("");
  const onHandelChange = ({ target: { value } }) => {
    setText(value);
    prepareData(value);
  };
  const onHandelClear = () => setText("");

  return (
    <FormStyled>
      <textarea className="formArea" value={text} onChange={onHandelChange} />
     
    </FormStyled>
  );
};

export default Form;
