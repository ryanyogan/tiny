import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom";
import { Listings } from "./sections";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.css";

const client = new ApolloClient({
  uri: "/api"
});

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Listings title="Tiny Listings" />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
