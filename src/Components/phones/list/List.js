import React from "react";
import ListItem from "./listItem/ListItem";
import { ListStyled } from "./ListStyled";

const List = ({ phones }) => {
  return (
    <ListStyled>
      {!!phones.length ? (
        phones.map((phone, idx) => (
          <ListItem phone={phone} key={phone._id} idx={idx} />
        ))
      ) : (
        <div>
          <p>No numbers.</p>
          <p>Please, paste text with numbers!</p>
        </div>
      )}
    </ListStyled>
  );
};

export default List;
