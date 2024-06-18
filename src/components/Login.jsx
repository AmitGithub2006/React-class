import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    if (name.length < 3 || password.length < 5) {
      alert("User or password not valid");
    } else {
      alert("User and password are valid");
    }
  }

  function userHandler(e) {
    let item = e.target.value;
    console.log(item);

    if (item.length < 3) {
      setUserError(true);
      console.log("Name is too short");
    } else {
      setUserError(false);
    }
    setName(item);
  }

  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 5) {
      setPasswordError(true);
      console.log("Password is too short");
    } else {
      setPasswordError(false);
    }
    setPassword(item);
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={userHandler}
        />
        {userError ? <span>User not valid</span> : null}
        <br /> <br />
        <input
          type="password"
          placeholder="Enter your password"
            value={password}
          onChange={passwordHandler}
        />{" "}
        {passwordError ? <span>Password not valid</span> : null}
        <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
