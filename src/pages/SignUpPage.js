import * as React from "react";

const SignUpPage = () => (
  <>
    <h1>Sign Up</h1>
    <label htmlFor="username">Username</label>
    <input type="text" id="username" />
    <label htmlFor="email">Email</label>
    <input type="text" id="email" />
    <label htmlFor="password">Password</label>
    <input type="password" id="password" />
    <label htmlFor="repeat-password">Repeat password</label>
    <input type="password" id="repeat-password" />
    <button type="submit" disabled>Sign Up</button>
  </>
);

export default SignUpPage;
