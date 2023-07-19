import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../services/OnlineContext";
import "../Login.css";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { setIsOnline } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // if user and password exist in database
    if (email && password) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/login`,
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setIsOnline(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
        })
        .then(() => {
          navigate("/account", { replace: true });
        })
        // If error
        .catch((err) => {
          console.error(err);
          Swal.fire(
            "Erreur de connexion",
            "Identifiant et/ou mot de passe incorrect(s)",
            "error"
          );
        });
    } else {
      // If fields are empty
      Swal.fire(
        "Erreur de connexion",
        "Pour vous connecter, merci de renseigner votre identifiant et votre mot de passe",
        "error"
      );
    }
  }

  return (
    <div className="login">
      <section>
        <h1 className="title-login">CONNEXION</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-box">
            <label htmlFor="email" className="login-label">
              E-mail :
            </label>
            <input
              className="login-input"
              type="text"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label htmlFor="password" className="login-label">
              Mot de passe :
            </label>
            <input
              className="login-input"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          <button className="login-button" type="button" onClick={handleSubmit}>
            CONNEXION
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
