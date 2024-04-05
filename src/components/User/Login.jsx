import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../common/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.scss";


const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const navigate = useNavigate();

  const signInUser = (e) => {
    e.preventDefault();
    if (!userEmail || !userPassword) {
      setErrorPass("Пожалуйста, введите почту и пароль.");
      return;
    }
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then(({ user }) => {
        setErrorPass("");
        setUserEmail("");
        setUserPassword("");
        navigate('/userAccount');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/invalid-email") {
          setErrorPass(
            "Invalid email address. Please check the entered data."
          );
        }
        console.error(
          "Error sending password reset email:",
          errorCode + " " + errorMessage
        );
      });
  };

  return (
    <div>
      <div className="wrapper">
        <div className="dark-overlay"></div>
        <div className="login-box">
          <form onSubmit={signInUser}>
            <h2>Login</h2>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input
                type="email"
                required
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input
                type="password"
                required
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <div className="error-message" style={{ color: "red" }}>
              {errorPass}
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>
                Don't have an account? <Link to="/signup">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
