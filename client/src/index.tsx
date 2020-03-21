import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";

render(
  <React.StrictMode>
    <div>Hello World</div>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
