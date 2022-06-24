import axios from "axios";
import * as React from "react";

const SignUpPage = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const passwordsAreValidAndEqual = (p1, p2) => p1.length > 7 && p1 === p2;
  const submit = (event) => {
    event.preventDefault();
    axios.post("/api/1.0/users", { username, email, password });
  };
  return (
    <>
      <form className="SignUp__form">
        <div className="SignUp__title">
          <h1>Sign Up</h1>
        </div>

        <div className="SignUp__body">
          <div className="SignUp__field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="SignUp__field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="SignUp__field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="SignUp__field">
            <label htmlFor="repeat-password">Repeat password</label>
            <input
              type="password"
              id="repeat-password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="SignUp__button">
          <button
            type="submit"
            disabled={!passwordsAreValidAndEqual(password, repeatPassword)}
            onClick={submit}
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpPage;
