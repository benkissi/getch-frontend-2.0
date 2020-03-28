import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import makeStore from "../redux/store";
import DashboardLayout from "../components/dashboardLayout";


export default withRedux(makeStore, { debug: true })(
  class MyApp extends App {

    render() {
      const { Component, pageProps, store } = this.props;
      const Layout = Component.Layout || DashboardLayout
      return (
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      );
    }
  }
);
