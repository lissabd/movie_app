import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../../common/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../features/users/userSlice";
import "./Login.scss";


const SignUp = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then(({ user }) => {
        dispatch(
          setUser({
            userEmail: user.email,
            userUid: user.uid,
          })
        );
        navigate('/userAccount');
      })
      .catch((error) => {
        setErrorPass("An error occurred when creating a user. Try again.");
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/weak-password") {
          setErrorPass("The password is too weak. Try again");
        } else if (errorCode === "auth/email-already-in-use") {
          setErrorPass(
            "User with mail" +
              { userEmail } +
              " already exists. Please log in or use the password recovery feature."
          );
        } else if (errorCode === "auth/invalid-email") {
          setErrorPass(
            "Invalid email address. Please check the entered data."
          );
        }
        console.error("Error creating user:", errorCode, errorMessage);
      })
      .finally(() => {
        setUserEmail('');
        setUserPassword('');
      });
  };

  return (
    <div>
      <div className="wrapper">
        <div className="dark-overlay"></div>
        <div className="sign-box">
          <form onSubmit={registerUser}>
            <h2>Register</h2>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="text" required />
              <label>Your name</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input 
                type="email"
                required
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)} />
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
                onChange={(e) => setUserPassword(e.target.value)} />
              <label>Password</label>
            </div>
            <div className='error-message' style={{ color: 'red' }}>{errorPass}</div>
            <button type="submit">Regiter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
