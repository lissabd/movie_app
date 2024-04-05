import React from "react";
import UserBlock from "./UserBlock/UserBlock";
import { Link } from "react-router-dom";
import { FaFilm } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { getUser } from "../../../features/users/userSlice";
import { RiEyeCloseLine } from "react-icons/ri";
import "./UserAccount.scss";
import { useSelector } from "react-redux";


const UserAccount = () => {
  const user = useSelector(getUser);
  console.log(user)
  return (
    <div className="profile-container">
      <div className="main-profile-info">
        <h1>Your Account</h1>
      </div>
      <div className="main-container">
        <div className="navbar">
          <ul>
            <Link to="/userFavourites">
              <li>My Favourites</li>
            </Link>
            <Link to="/usersReview">
              <li>My Reviews</li>
            </Link>
            <Link to="/userWatchLater">
              <li>Watch it later</li>
            </Link>
          </ul>
        </div>
        <div className="movies-container">
          <Link to="/userFavourites">
            <UserBlock
              title="My Favourites"
              icon={<FaFilm size={60} color="white" />}
            />
          </Link>
          <Link to="/usersReview">
            <UserBlock
              title="My Reviews"
              icon={<TfiWrite size={60} color="white" />}
            />
          </Link>
          <Link to="/userWatchLater">
            <UserBlock
              title="Watch it later"
              icon={<RiEyeCloseLine size={70} color="white" />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
