module.exports = () => {
  /* eslint-disable */
  require("dotenv-flow").config();
  const withLess = require("@zeit/next-less");
  const lessToJS = require("less-vars-to-js");
  const fs = require("fs");
  const path = require("path");
  // Where your antd-custom.less file lives
  //   const themeVariables = lessToJS(
  //     fs.readFileSync(
  //       path.resolve(__dirname, "./assets/antd-custom.less"),
  //       "utf8"
  //     )
  //   );
  // fix: prevents error when .less files are required by node
  if (typeof require !== "undefined") {
    require.extensions[".less"] = file => {};
  }
  return withLess({
    lessLoaderOptions: {
      javascriptEnabled: true
      //   modifyVars: themeVariables // make your antd custom effective
    },
    env: {
      JWT_SECRET: process.env.JWT_SECRET,
      FB_APP_ID: process.env.FB_APP_ID,
      FB_APP_SECRET: process.env.FB_APP_SECRET
    }
  });
};
