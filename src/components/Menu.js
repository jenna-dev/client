import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <Link to="/game" className="btn btn-primary btn-lg">
        Game
      </Link>

      <Link to="/leaderboard" className="btn btn-warning btn-lg">
        Leaderboard
      </Link>
    </div>
  );
};

export default Menu;
