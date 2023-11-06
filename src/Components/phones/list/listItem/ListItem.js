import React from "react";
import { useDispatch } from "react-redux";
import { setPosition } from "../../../../redux/slices/phones";
import { ListItemStyled } from "./ListItemStyled";

const ListItem = ({ phone, idx }) => {
  const dispatch = useDispatch();

  const onSetPosition = ({ target }) =>
    dispatch(setPosition({ _id: phone._id, value: target.value }));
  return (
    <ListItemStyled>
      <p className="listItemName">
        {idx + 1}. {phone.phoneNumber}
      </p>
      {/* <label>
        Position 1
        <input
          onChange={onSetPosition}
          type="radio"
          checked={phone.position === "1"}
          value="1"
        />
      </label>
      <label>
        Position 2
        <input
          onChange={onSetPosition}
          type="radio"
          checked={phone.position !== "1"}
          value="2"
        />
      </label> */}
    </ListItemStyled>
  );
};

export default ListItem;
