import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { IoPersonOutline } from "react-icons/io5";
import SearchBar from "./SearchBar/SearchBar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUser, setUser } from "../../features/users/userSlice";
import DropdownMenu from "./DropDownMenu/DropDownMenu";
import { auth } from "../../common/firebase";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const ifUser = useSelector(getUser);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser({ userEmail: user.email, userUid: user.uid }));
      } else {
        dispatch(setUser({ userEmail: null, userUid: null }));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Account logout error", error);
      });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <SearchBar />
      <div
        className="user-menu"
        onMouseEnter={toggleDropdown}
        onMouseLeave={closeDropdown}
      >
        {ifUser.userUid ? (
          <Link to="/userAccount">
            <div className="user-image">
              <IoPersonOutline className="custom-icon" />
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <div className="user-image">
              <IoPersonOutline className="custom-icon" />
            </div>
          </Link>
        )}
        {isDropdownOpen && (
          <DropdownMenu
            handleLogout={handleLogout}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
