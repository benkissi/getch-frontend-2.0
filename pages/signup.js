import { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Button, Input } from "antd";

import { signupStart } from "../redux/user/user-actions";

function Signin(props) {
  const [state, setState] = useState({
    current: "signup",
    email: "",
    password: "",
    error: {
      email: null,
      password: null,
      isMatch: null
    },
  });

  useEffect(() => {
    if(!state.error.email && !state.error.password && state.error.isMatch){
      handleSignup({email:state.email, password: state.password})
    }
  }, [state.error])

  const setInput = (event) => {
    console.log(event.target.name);
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!validateEmail(state.email)) {
      console.log("hshsh");
      setState((prevState) => ({
        ...prevState,
        error: {
          ...prevState.error,
          email: "Add a correct email",
        },
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        error: {
          ...prevState.error,
          email: null,
        },
      }));
    }

    if (state.password.length < 8) {
      console.log("wrong pass");
      setState((prevState) => ({
        ...prevState,
        error: {
          ...prevState.error,
          password: "Password must be longer than 7 characters",
        },
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        error: {
          ...prevState.error,
          password: null,
        },
      }));
    }

    if(state.current == 'signup'){
      const isMatch = state.password === state.repeatPassword
      console.log('match', isMatch)

      setState((prevState) => ({
        ...prevState,
        error: {
          ...prevState.error,
          isMatch: isMatch
        }
      }))
    }
  };

  const handleSignup = (details) => {
    props.signup(details)
  }

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleAuthChange = () => {
    if (state.current == "signup") {
      console.log("auth change");
      setState((prevState) => ({
        ...prevState,
        current: "signin",
      }));
    }
    if (state.current == "signin") {
      console.log("auth change");
      setState((prevState) => ({
        ...prevState,
        current: "signup",
      }));
    }
  };

  const { current } = state;
  return (
    <div id="wrapper">
      <div className="pane">
        <img src="/images/newLogoWhite.svg" />
        <div className="slogan">Hyper target your Facebook ads</div>
      </div>
      <div className="auth">
        <div className="details">
          <h3>{current == "signup" ? "Sign up" : "Sign in"}</h3>
          <div className="input">
            <p
              className="error"
              style={{ display: state.error.email ? "block" : "none" }}
            >
              {state.error.email ? state.error.email : ""}
            </p>
            <Input
              name="email"
              type="email"
              placeholder="email"
              onChange={setInput}
            />
          </div>
          <div className="input">
            <p
              className="error"
              style={{ display: state.error.password ? "block" : "none" }}
            >
              {state.error.password ? state.error.password : ""}
            </p>
            <Input
              name="password"
              type="password"
              placeholder="password"
              onChange={setInput}
            />
          </div>
          {current === "signup" ? (
            <div className="input">
              <p
                className="error"
                style={{ display: state.error.isMatch === false ? "block" : "none" }}
              >
                Passwords do not match
              </p>
              <Input
                name="repeatPassword"
                type="password"
                placeholder="repeat password"
                onChange={setInput}
              />
            </div>
          ) : (
            ""
          )}
          <Button
            type="primary"
            style={{ width: "100%" }}
            onClick={handleSubmit}
          >
            {current === "signup" ? "Sign up" : "Sign in"}
          </Button>
          <div id="sub-actions">
            <p>By signing up, you agree to our terms and conditions</p>
            <p>
              Have an acount already?{" "}
              <span onClick={handleAuthChange}>
                {current === "signup" ? "Sign up" : "Sign in"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        #wrapper {
          display: flex;
          width: 100%;
          height: 100vh;
        }

        .pane {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #4e54c8;
          flex: 1;
        }

        .auth {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 2;
        }

        .details {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40%;
        }

        .input {
          width: 100%;
          margin: 10px 0 10px 0;
        }

        .card {
          color: black;
          display: flex;
          border-radius: 4px;
          width: 30%;
          background-color: white;
          height: 100px;
        }

        .slogan {
          color: white;
          font-size: 18px;
        }

        #sub-actions {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          margin-top: 10px;
        }

        #sub-actions p {
          margin: 0;
          margin-bottom: 5px;
        }

        #sub-actions span {
          color: #4e54c8;
          cursor: pointer;
          font-weight: bold;
        }

        .error {
          color: red;
        }
      `}</style>
    </div>
  );
}

Signin.Layout = (props) => <div>{props.children}</div>;

const mapStateToProps = state => ({
  user: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  signup: (details) => dispatch(signupStart(details))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
