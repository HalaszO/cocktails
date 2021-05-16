import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app/App";
import { store } from "./state";

ReactDOM.render(
  // Adding store
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
