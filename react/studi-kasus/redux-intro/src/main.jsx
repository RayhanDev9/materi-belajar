import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import store from "./store-v1.jsx";
import store from "./store-v2.jsx";
import App from "./App.jsx";
import { Provider } from "react-redux";

store.dispatch({ type: "account/blance", payload: 500 });
console.info(store.getState());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
