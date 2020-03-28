import { Row, Col } from 'antd';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Button  } from "antd";
import { connect } from "react-redux";
import { authFacebook } from "../redux/user/user-actions";
import SideBar from "../components/sideBar";

import Header from "./header";


const DashboardLayout = props => {
    const {
        authFb,
        user,
        fbToken
      } = props;
    const faceAuthStart = () => {
        console.log("#### FB auth start");
    };

    const responseFacebook = async res => {
        const { accessToken, userID } = res;
        console.log('fb',res)
        authFb(accessToken, user.id, userID);
    };

    const actions = [
        <FacebookLogin
          appId={process.env.FB_APP_ID}
          autoLoad={true}
          fields="name,email,id"
          onClick={faceAuthStart}
          scope="ads_management, email"
          callback={responseFacebook}
          render={renderProps => (
            <Button
              disabled={!!fbToken}
              type="primary"
              onClick={renderProps.onClick}
            >
              Connect Facebook
            </Button>
          )}
        />
    ]
 return (
     <div className="layout">
         <Row>
            <Col style={{position: 'relative', height: '100vh'}} span={4}><SideBar/></Col>
            <Col style={{padding: '0 20px 0 20px', minHeight: '100vh'}} span={20} className="child-container">
            <div className="header">
                <Header actions={actions} />
            </div>
            <div className="children">
                {props.children}
            </div>
                
            <footer>
                <div className="footer">
                    <p className="footer-item">&copy; 2010 - {new Date().getFullYear()}, Getch.</p>
                </div>
            </footer>
            </Col>
         </Row>

        <style jsx>{`
            .layout {
                position: relative;
                min-height: 100vh;
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
                width: 81%;
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
 )
}

const mapStateToProps = state => ({
    user: state.user.currentUser,
    fbToken: state.user.fbToken
  });

  const mapDispatchToProps = dispatch => ({
    authFb: (token, id, fbId) => dispatch(authFacebook({ token, id, fbId}))
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout)