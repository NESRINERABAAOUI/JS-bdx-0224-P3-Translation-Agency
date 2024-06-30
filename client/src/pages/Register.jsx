/* eslint-disable react/button-has-type */
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [newemail, setemail] = useState("");
  const [newname, setname] = useState("");
  const [newpassword, setpassword] = useState("");

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div id="backH">
      <form id="fr">
        <h3>create account</h3>
        <label htmlFor="username">Email</label>
        <input
          type="Email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email "
          id="username"
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          onChange={(e) => setname(e.target.value)}
          placeholder="username"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
          id="password"
        />

        <button onClick={onSubmit} id="b">
          register
        </button>

        <div className="social">
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
