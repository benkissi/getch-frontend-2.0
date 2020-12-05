import { Provider } from "react-redux";
import Head from "next/head";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import makeStore from "../redux/store";
import { ToastContainer, toast } from "react-toastify";

// import "react-toastify/scss/main.scss";
import "react-toastify/dist/ReactToastify.min.css";
import TagManager from "react-gtm-module";

export default withRedux(makeStore, { debug: true })(
  class MyApp extends App {
    componentDidMount() {
      const tagManagerArgs = {
        gtmId: "GTM-WZH3SMB",
      };

      TagManager.initialize(tagManagerArgs);
    }
    render() {
      const defaultLayout = (props) => <div>{props.children}</div>;
      const { Component, pageProps, store } = this.props;
      const Layout = Component.Layout || defaultLayout;

      return (
        <Provider store={store}>
          <Head>
            <link rel="shortcut icon" href="/images/fav.png" />
          </Head>
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
