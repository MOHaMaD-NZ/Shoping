import React from "react";
import ReactDOM from "react-dom/client";
import ShopContextProvider from "./Context/ShopContext.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);
