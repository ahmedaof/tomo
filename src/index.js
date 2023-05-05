import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";

// setup query client (react-query)
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
