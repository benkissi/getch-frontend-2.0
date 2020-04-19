import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import makeStore from "../redux/store";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/scss/main.scss";

export default withRedux(makeStore, { debug: true })(
  class MyApp extends App {
    render() {
      const defaultLayout = (props) => <div>{props.children}</div>;
      const { Component, pageProps, store } = this.props;
      const Layout = Component.Layout || defaultLayout;
      return (
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer
              position="top-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
            />
          </Layout>
        </Provider>
      );
    }
  }
);
