/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "../styles/login.scss";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // dispatch(loginUser({email:Email,password:Password}, navigate))
  };

  return (
    <div id="login">
      <form id="fr" onSubmit={onSubmit}>
        <label htmlFor="username">email</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Username"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          id="password"
        />
        <button id="b" onClick={onSubmit}>
          Log In
        </button>

        <div className="social">
          <Link to="/register">Sign up</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
