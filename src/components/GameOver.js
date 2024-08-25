import React, { useState } from "react";
import axios from "axios";
import Leaderboard from "./Leaderboard";
import { useNavigate } from "react-router-dom";

const GameOver = ({ score }) => {
  const [formData, setFormData] = useState({ username: "", errors: {} });
  const navigate = useNavigate();
  // const [score, setScore] = useState({ score });

  const validateForm = () => {
    const errors = {};

    // Check if username is empty
    if (!formData.username) {
      errors.username = "Username is required";
    }

    setFormData((prevState) => ({ ...prevState, errors }));

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        await axios.post("http://localhost:5001/api/v1/leaderboard", {
          username: formData.username,
          score,
        });
        setFormData({ username: "", errors: {} });
        navigate("/leaderboard");
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Game Over!</h1>
        <p>Final Score: {score}</p>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <input className="btn btn-warning" type="submit" value="Submit" />
        {formData.errors.username && (
          <p style={{ color: "red" }}>{formData.errors.username}</p>
        )}
      </form>
    </>
  );
};

export default GameOver;
