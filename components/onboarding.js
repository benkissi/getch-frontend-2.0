import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Modal, Button, Select, Row, Col } from "antd";
import { connect } from "react-redux";

import { authFacebook } from "../redux/user/user-actions";

const Onboarding = (props) => {
  const { authFb, user, fbToken } = props;

  const faceAuthStart = () => {
    console.log("#### FB auth start");
  };

  const responseFacebook = async (res) => {
    const { accessToken, userID, name } = res;
    authFb(accessToken, user.id, userID, name);
  };
  return (
    <div>
      <Modal
        visible={!!!fbToken.token}
        centered
        footer={null}
        closable={false}
        width={800}
      >
        <div className="modal-inner">
          <h2>Almost done</h2>
          <div className="fb">
            <img src="/images/facebook.svg" />
          </div>
          <h3>Lets search Facebook</h3>
          <p>Connect to Facebook to begin searching for interest</p>
          <FacebookLogin
            appId={process.env.FB_APP_ID}
            autoLoad={false}
            fields="name,email,id"
            onClick={faceAuthStart}
            scope="ads_management, email"
            callback={responseFacebook}
            render={(renderProps) => (
              <div className="connect">
                <Button
                  disabled={!!fbToken.token}
                  type="primary"
                  onClick={renderProps.onClick}
                >
                  Connect Facebook
                </Button>
              </div>
            )}
          />
        </div>
      </Modal>
      <style jsx>{`
        .modal-inner {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h2 {
          margin-bottom: 50px;
        }

        .connect {
          margin-bottom: 50px;
        }

        .fb {
          width: 50px;
        }

        .fb img {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

const mapStateToProps = (state) => ({
  fbToken: state.user.fbToken,
  user: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  authFb: (token, id, fbId, name) =>
    dispatch(authFacebook({ token, id, fbId, name })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
