import React from "react";

import { Link } from "react-router-dom";
import Logout from "../components/Logout";

function Dashboard() {
  return (
    <div>
      <h1>Tableau de bord</h1>
      <ul>
        <li>
          <Link to="/add"> Ajouter une patisserie</Link>
        </li>
        <li>
          <Link to="/pastryshop"> Modifier ou supprimer une patisserie</Link>
        </li>
      </ul>
      <Logout />
    </div>
  );
}

export default Dashboard;
