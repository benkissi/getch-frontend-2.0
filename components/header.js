import Router from "next/router";
import { connect } from "react-redux";

const Header = (props) => {
  const handleSettingsClick = () => {
    Router.push("/settings");
  };

  const goHome = () => {
    Router.push("/");
  };

  const isFreeUser = () => {
    if (props.user && props.user.plan === "PL001") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div id="wrapper">
      <div className="logo" onClick={goHome}>
        <img src="/images/newLogo.svg" />
      </div>
      {isFreeUser() ? (
        <div className="count">
          <p>
            3 free search:{" "}
            <span className={`${props.searchCount >= 3 ? "red" : ""}`}>
              {props.searchCount < 3
                ? `You have ${3 - props.searchCount} free search left`
                : "You are out of free searches, kindly upgrade"}
            </span>
          </p>
        </div>
      ) : (
        ""
      )}

      <div id="actions">
        {props.actions
          ? props.actions.map((action, index) => (
              <div key={index}>{action}</div>
            ))
          : ""}
        <div className="profile-wrapper" onClick={handleSettingsClick}>
          <img src="/images/user.svg" />
        </div>
      </div>

      <style jsx>{`
        #wrapper {
          display: flex;
          width: 100%;
          padding: 10px 0 10px 0;
        }

        #actions {
          display: flex;
          align-items: center;
          margin-left: auto;
        }

        #actions > * {
          margin: 0 5px 0 5px;
        }

        .count {
          display: flex;
          margin-left: auto;
        }

        .count p {
          margin: 0;
        }

        .count span {
          font-weight: bold;
        }
        .profile-wrapper {
          width: 50px;
          height: 30px;
        }

        .profile-wrapper img {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .logo {
          width: 100px;
          cursor: pointer;
        }

        .logo img {
          width: 100%;
        }

        .red {
          color: red;
        }
      `}</style>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  searchCount: state.search.searchCount,
});

export default connect(mapStateToProps)(Header);
