/* eslint-disable */
require("dotenv-flow").config();
const withLess = require("@zeit/next-less");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./assets/antd-custom.less"), "utf8")
);

module.exports = withCSS(
  withSass(
    withLess({
      lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables, // make your antd custom effective
      },
      env: {
        JWT_SECRET: process.env.JWT_SECRET,
        FB_APP_ID: process.env.FB_APP_ID, 
        FB_APP_SECRET: process.env.FB_APP_SECRET,
        BASE_URL: process.env.BASE_URL,
        RAVE_PUB_KEY: process.env.RAVE_PUB_KEY,
      },
      webpack: (config, { isServer }) => {
        if (isServer) {
          const antStyles = /antd\/.*?\/style.*?/;
          const origExternals = [...config.externals];
          config.externals = [
            (context, request, callback) => {
              if (request.match(antStyles)) return callback();
              if (typeof origExternals[0] === "function") {
                origExternals[0](context, request, callback);
              } else {
                callback();
              }
            },
            ...(typeof origExternals[0] === "function" ? [] : origExternals),
          ];

          config.module.rules.unshift({
            test: antStyles,
            use: "null-loader",
          });
        }
        return config;
      },
    })
  )
);
