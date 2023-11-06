import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Phones from "./phones/Phones";

const App = () => {
  return (
    <Provider store={store}>
      <Phones />
    </Provider>
  );
};

export default App;
