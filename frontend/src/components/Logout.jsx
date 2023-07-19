import React, { useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../services/OnlineContext";

function Logout() {
  const { setIsOnline } = useContext(UserContext);
  const navigate = useNavigate();
  // Function logout
  function logoutButton() {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/logout`, {
        withCredentials: true,
      })
      .then(() => {
        navigate("/", { replace: true });
        setIsOnline(null);
        localStorage.setItem("user", null);
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Confirmation",
          text: "Déconnexion réussie.",
        });
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.error(err);
        }
      });
  }

  return (
    <div>
      <button
        className="disconnect-button"
        type="button"
        onClick={logoutButton}
      >
        SE DECONNECTER
      </button>
    </div>
  );
}

export default Logout;
