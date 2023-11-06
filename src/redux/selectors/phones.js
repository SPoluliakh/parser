export const phonesSelector = (state) => state.phones.list;

export const phonesFilterSelector = (state) => state.phones.filter;

export const filteredPhonesSelector = (state) =>
  state.phones.list.filter((phone) =>
    phone.phoneNumber.includes(state.phones.filter)
  );
