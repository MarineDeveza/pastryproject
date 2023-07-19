import React from "react";

import { Link } from "react-router-dom";
import Logout from "../components/Logout";
import "../Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="create-title">Tableau de bord</h1>
      <ul className="dashboard-list">
        <li className="dashboard">
          <Link to="/add"> Ajouter une patisserie</Link>
        </li>
        <li className="dashboard">
          <Link to="/pastryshop"> Modifier ou supprimer une patisserie</Link>
        </li>
      </ul>
      <Logout />
    </div>
  );
}

export default Dashboard;
