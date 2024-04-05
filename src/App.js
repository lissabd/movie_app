import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/User/Login";
import SignUp from "./components/User/SignUp";
import UserAccount from "./components/User/UserAccount/UserAccount";
import Favourites from "./components/User/UserAccount/Favourites";
import WatchLater from "./components/User/UserAccount/WatchLater";
import ReviewForm from "./components/Review/ReviewForm";
import Reviews from "./components/User/UserAccount/Reviews";
import "./App.scss";


const App = () => {
  return (
    <>
      <Router>
        <>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/movie/:imdbID" element={<MovieDetails/>} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/userAccount" element={<UserAccount/>}/>
              <Route path="/userFavourites" element={<Favourites/>}/>
              <Route path="/userWatchLater" element={<WatchLater/>}/>
              <Route path="/usersReview" element={<Reviews/>}/>
              <Route path="/reviewForm/:imdbID" element={<ReviewForm/>}/>
            </Routes>
          </div>
        </>
      </Router>
    </>
  );
};

export default App;
