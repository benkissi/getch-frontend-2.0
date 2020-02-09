import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import makeStore from "../redux/store";

export default withRedux(makeStore, { debug: true })(
  class MyApp extends App {

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      );
    }
  }
);
