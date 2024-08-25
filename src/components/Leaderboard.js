import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Leaderboard = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/v1/leaderboard")
      .then((res) => setScores(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container my-5">
      <div className="card">
        <h2 className="card-header">Top 100 Players</h2>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Ranking</th>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              {scores.length > 0 ? (
                scores.map((score, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{score.username}</td>
                    <td>{score.score}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No records found.</td>
                </tr>
              )}
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
