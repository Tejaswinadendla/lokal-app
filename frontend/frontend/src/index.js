// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom"; // ✅ Router should be here
// import App from "./App";
// import store from "./store";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <BrowserRouter> {/* ✅ Only one Router in the entire app */}
//       <App />
//     </BrowserRouter>
//   </Provider>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Router should be here
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

