import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/apolloClient.js";
import "../src/styles/index.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
