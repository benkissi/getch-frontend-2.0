import { connect } from "react-redux";
import DashboardLayout from "../components/dashboardLayout";
import { Button } from "antd";

import { userLogout } from "../redux/user/user-actions";

const Settings = (props) => {
  const handleLogout = () => {
    props.logout(props.user.xToken);
  };

  return (
    <div className="wrapper">
      <div className="title">
        <h2>Settings</h2>
      </div>

      <div id="logout">
        <p>Logout</p>
        <div id="button">
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </div>
      <div className="divider"></div>
      <div id="plan">
        <p>Plan</p>
        <div id="value">
          <p>Life-time access</p>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          margin-top: 100px;
          width: 100%;
          justify-content: center;
        }

        h2 {
          margin-bottom: 50px;
        }

        #logout {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        }
        .title {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        }

        #logout #button {
          margin-left: 50%;
        }

        #plan {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        }

        #plan #value {
          margin-left: 50%;
        }

        .divider {
          margin-top: 30px;
          margin-bottom: 30px;
          width: 60%;
          border-bottom: solid 1px #eee;
          align-self: center;
        }
      `}</style>
    </div>
  );
};

Settings.Layout = DashboardLayout;

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  logout: (token) => dispatch(userLogout(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
