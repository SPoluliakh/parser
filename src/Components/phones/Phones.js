import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetFile } from "../../hooks/useGetFile";
import {
  filteredPhonesSelector,
  phonesFilterSelector,
  phonesSelector,
} from "../../redux/selectors/phones";
import { getPhones, setFilter } from "../../redux/slices/phones";
import Form from "./form/Form";
import List from "./list/List";
// import { saveAs } from "file-saver";
import { Wrapper } from "./PhonesStyled";
import { v4 as uuidv4 } from "uuid";
import ButtonGroup from "./buttonGroup/ButtonGroup";

// const headers = [
//   "Name",
//   "Given Name",
//   "Additional Name",
//   "Family Name",
//   "Yomi Name",
//   "Given Name Yomi",
//   "Additional Name Yomi",
//   "Family Name Yomi",
//   "Name Prefix",
//   "Name Suffix",
//   "Initials",
//   "Nickname",
//   "Short Name",
//   "Birthday",
//   "Gender",
//   "Location",
//   "Billing Information",
//   "Directory Server",
//   "Mileage",
//   "Occupation",
//   "Hobby",
//   "Sensitivity",
//   "Priority",
//   "Subject",
//   "Notes",
//   "Language",
//   "Photo",
//   "Group Membership",
//   "Phone 1 - Type",
//   "Phone 1 -Value",
// ];

const Phones = () => {
  const dispatch = useDispatch();
  const phones = useSelector(filteredPhonesSelector);
  const filter = useSelector(phonesFilterSelector);

  const { getCSV } = useGetFile(phones);

  const prepareData = (text) => {
    const regexp = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;
    const matches_array = [...text.match(regexp)].map((item) =>
      item.length > 11 ? item.slice(0, 11) : item
    );
    const set = new Set(matches_array);
    const result = Array.from(set);
    const data = [
      ...result.map((phone) => ({
        phoneNumber: phone,
        _id: uuidv4(),
        position: "1",
      })),
    ];
    dispatch(getPhones(data));
  };

  const onChangeFilter = ({ target: { value } }) => dispatch(setFilter(value));

  // const rewriteNumber = (number) => {
  //   if (number[0] === "4") {
  //     const res = number.split("");
  //     res[0] = "7";
  //     res[1] = "9";
  //     return res.join("");
  //   }
  //   return number;
  // };

  // const getCSV = () => {
  //   const result = phones.map((item, idx) =>
  //     headers.map((header) => {
  //       if (header === "Name") {
  //         return `${idx + 1}_` + item;
  //       }
  //       if (header === "Phone 1 -Value") {
  //         return "+" + rewriteNumber(item);
  //       }
  //       return "";
  //     })
  //   );
  //   const newData = [headers, ...result];

  //   const data = newData.map(function (el) {
  //     return el.join(",") + "\r\n";
  //   });

  //   const name = Date.now();

  //   saveAs(new Blob(data, { type: "text/csv;charset=utf-8" }), `${name}.csv`);
  // };

  return (
    <Wrapper>
      <Form
        isGetCsv={phones.length}
        prepareData={prepareData}
        getCSV={getCSV}
      />

      <div className="innerWrapper">
        <div className="totalNumbers">
          <div className="innerWrapperInfo">
            <p className="info">Total numbers: {phones.length}</p>
            <label>
              Filter by number:
              <input
                className="filter"
                type="text"
                onChange={onChangeFilter}
                value={filter}
              />
            </label>
          </div>
          {!!phones.length && (
            <ButtonGroup
              getCSV={getCSV}
              onHandelClear={() => dispatch(getPhones([]))}
            />
          )}
        </div>

        <div className="phonesList">
          <List phones={phones} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Phones;
