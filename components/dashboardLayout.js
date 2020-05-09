import { Row, Col } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { authFacebook } from "../redux/user/user-actions";
import Router from "next/router";
import SideBar from "../components/sideBar";
import Onboarding from "../components/onboarding";

import { toast } from "react-toastify";

import Header from "./header";

const DashboardLayout = (props) => {
  const { authFb, user, fbToken, userError, searchError } = props;
  const router = useRouter();

  useEffect(() => {
    if (searchError || userError) {
      toast.error(`There was an error.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [userError, searchError]);

  useEffect(() => {
    if (user == null) {
      router.push("/signup");
    }
  }, [props.user]);

  const faceAuthStart = () => {
    console.log("#### FB auth start");
  };

  const responseFacebook = async (res) => {
    const { accessToken, userID } = res;
    console.log("fb", res);
    authFb(accessToken, user.id, userID);
  };

  const goToPlans = () => {
    Router.push("/plans");
  };

  const actions = [
    <Button
      style={{ background: "#f86326", border: "none", color: "white" }}
      onClick={goToPlans}
    >
      Get life time access
    </Button>,
  ];
  return (
    <div className="layout">
      <Row justify="end">
        {/* <Col
          style={{
            position: "relative",
            height: "100vh",
            width: "16.66666667%",
          }}
          span={4}
        >
          <SideBar />
        </Col> */}
        <Col
          style={{ padding: "0 20px 0 20px", minHeight: "100vh" }}
          span={24}
          className="child-container"
          // centered
          justify="center"
        >
          <div className="header">
            <Header actions={actions} />
          </div>
          <Onboarding />
          <div className="children">{props.children}</div>

          <footer>
            <div className="footer">
              <p className="footer-item">
                &copy; 2010 - {new Date().getFullYear()}, Getch.
              </p>
            </div>
          </footer>
        </Col>
      </Row>

      <style jsx>{`
        .layout {
          position: relative;
          min-height: 100vh;
          padding: 0 200px;
        }

        .layout-body {
          position: relative;
        }

        .child-container {
          display: flex;
        }

        .children {
          flex-grow: 1;
        }

        .header {
          position: fixed;
          top: 0;
          width: 90%;
          left: 5%;
          background-color: white;
          z-index: 100;
        }

        footer {
          margin-top: 100px;
          display: flex;
          justify-content: center;
          width: 100%;
          background: white;
          height: 50px;
          margin-top: 50px;
        }

        .footer {
          position: fixed;
          bottom: 0;
          width: inherit;
          background-color: white;
          color: black;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  fbToken: state.user.fbToken,
  userError: state.user.error,
  searchError: state.search.error,
});

const mapDispatchToProps = (dispatch) => ({
  authFb: (token, id, fbId) => dispatch(authFacebook({ token, id, fbId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);
