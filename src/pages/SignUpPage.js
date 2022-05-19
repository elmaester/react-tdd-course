import * as React from "react";

const SignUpPage = () => {
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const passwordsAreValidAndEqual = (p1, p2) => p1.length > 7 && p1 === p2;
  return (
    <>
      <h1>Sign Up</h1>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="repeat-password">Repeat password</label>
      <input
        type="password"
        id="repeat-password"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <button
        type="submit"
        disabled={!passwordsAreValidAndEqual(password, repeatPassword)}
      >
        Sign Up
      </button>
    </>
  );
};

export default SignUpPage;
