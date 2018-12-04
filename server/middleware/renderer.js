import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../../src/App";

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
  const markup = ReactDOMServer(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <script type="text/javascript" src="../../build/static/js/main.a301fa46.js"></script>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>

    `);
};
