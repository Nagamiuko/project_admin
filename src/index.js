import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { Provider } from "react-redux";
import Store from "./components/redux/store";
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={Store}>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
