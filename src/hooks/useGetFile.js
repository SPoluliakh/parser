import { saveAs } from "file-saver";

const headers = [
  "Name",
  "Given Name",
  "Additional Name",
  "Family Name",
  "Yomi Name",
  "Given Name Yomi",
  "Additional Name Yomi",
  "Family Name Yomi",
  "Name Prefix",
  "Name Suffix",
  "Initials",
  "Nickname",
  "Short Name",
  "Birthday",
  "Gender",
  "Location",
  "Billing Information",
  "Directory Server",
  "Mileage",
  "Occupation",
  "Hobby",
  "Sensitivity",
  "Priority",
  "Subject",
  "Notes",
  "Language",
  "Photo",
  "Group Membership",
  "Phone 1 - Type",
  "Phone 1 -Value",
];

export const useGetFile = (arr) => {
  const rewriteNumber = (number) => {
    if (number[0] === "4") {
      const res = number.split("");
      res[0] = "7";
      res[1] = "9";
      return res.join("");
    }
    return number;
  };

  const getCSV = () => {
    const result = arr.map((item, idx) =>
      headers.map((header) => {
        if (header === "Name") {
          return `${idx + 1}_` + item.phoneNumber;
        }
        if (header === "Phone 1 -Value") {
          return "+" + rewriteNumber(item.phoneNumber);
        }
        return "";
      })
    );
    const newData = [headers, ...result];

    const data = newData.map(function (el) {
      return el.join(",") + "\r\n";
    });

    const name = Date.now();

    saveAs(new Blob(data, { type: "text/csv;charset=utf-8" }), `${name}.csv`);
  };

  return { getCSV };
};
