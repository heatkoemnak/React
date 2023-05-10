import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <div class="signup-content" id="signup-content">
        <div class="btn-back-to-login">
          <i class="bx bx-arrow-back" id="back">
            <Link to="/Login">Sign in</Link>
          </i>
        </div>
        <h1>Create Account</h1>
        <form class="signup-box">
          <div class="name">
            <div class="firstName">
              <label for="Username">First Name</label>
              <input type="text" placeholder="Username" />
            </div>
            <div class="lastName">
              <label for="Username">Last Name</label>
              <input type="text" placeholder="Username" />
            </div>
          </div>

          <label for="Email">Email</label>
          <input type="email" placeholder="Email" />
          <label for="Password">Password</label>
          <input type="password" placeholder="Password" />
          <label for="Phone">Mobile phone</label>
          <input type="tel" placeholder="mobile phone" />
          <div class="accept-policy">
            <input type="checkbox" name="accept" id="accept" />
            <label for="accept">
              Accept the term of service and Privacy Policy
            </label>
          </div>
          <button class="submit-signup" id="submit-signup">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
