import Router from "next/router";
const Header = (props) => {
  const handleSettingsClick = () => {
    Router.push("/settings");
  };

  const goHome = () => {
    Router.push("/");
  };

  return (
    <div id="wrapper">
      <div className="logo" onClick={goHome}>
        <img src="/images/newLogo.svg" />
      </div>
      <div className="count">
        <p>
          3 free search: <span>You have 2 left</span>
        </p>
      </div>
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
        }

        #actions > * {
          margin: 0 5px 0 5px;
        }

        .count {
          display: flex;
          margin-left: auto;
          margin-right: auto;
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
      `}</style>
    </div>
  );
};

export default Header;
