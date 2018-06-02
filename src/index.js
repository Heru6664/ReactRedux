import React, { Component } from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";

import store from "../App/Store/index";
import Home from "../App/components/home";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
