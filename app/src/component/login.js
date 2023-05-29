import React from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../screen/asset/google.webp";
import { useState } from "react";
import "./signin.css"


function Login() {
  const navvigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (email !== "" && password !== "") {
      if (email === "camcode@gmail.com" && password === "camCode81") {
        navvigate("/");
      } else {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <div>
      <div class="login-content ">
        <h1>Sign in</h1>
        <form class="login-box">
          <label for="Email">Email or mobile phone number</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="Password">Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div class="remember">
            <input type="checkbox" name="remember" id="remember" />
            <label for="remember">Remember me</label>
          </div>
          <div class="forget">
            <Link href="#">Forget password?</Link>
          </div>

          <div class="google">
            <img src={google} alt="google" />
            <Link href="#" class="google-btn">
              Sign in with Google
            </Link>
          </div>
          <button onClick={login} class="submit-login" id="submit-login">
            LOGIN
          </button>
          <div class="new-account">
            <p>New to Anti WastE?</p>
            <Link>Create your Anti WastE account</Link>
          </div>
          <Link to="/Signup" class="signup-btn" id="signUp">
            <Link to="/Signup">Create an Account</Link>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
