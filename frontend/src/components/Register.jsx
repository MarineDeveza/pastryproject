/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // Submit form into database
  const onSubmit = (data) => {
    const dataPass = { ...data };

    // Convert the data object to json format
    const jsonData = JSON.stringify(dataPass);

    // post data into the database
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/register`, jsonData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        Swal.fire({
          title: "Confirmation",
          text: "Votre compte a bien été enregistré. Pour accéder à votre compte, merci de vous connecter.",
        });
      })
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="login">
      <form className="login-section" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title-login">CREER UN COMPTE</h1>
        <div className="box-form">
          <label htmlFor="email" className="login-label">
            <div>Adresse e-mail</div>
            <div>
              <input
                className="login-input"
                id="email"
                type="text"
                name="adresse e-mail"
                placeholder="adresse@exemple.com"
                {...register("email", {
                  required: "Ce champ est requis",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+.[^\s@]+$/,
                    message: "Veuillez entrer une adresse e-mail valide",
                  },
                })}
              />
              <span className="errorMsg">
                {errors.email && <p>{errors.email.message}</p>}
              </span>
            </div>
          </label>

          <label htmlFor="adherent" className="login-label">
            <div>Prénom</div>
            <input
              className="login-input"
              type="text"
              name="firstname"
              placeholder="Prénom"
              {...register("firstname", {
                required: "Ce champ est requis",
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ\u00C0-\u017F'-]+$/,
                  message:
                    "Veuillez entrer un prénom valide. Seules les lettres sont acceptées.",
                },
              })}
            />
            <span className="errorMsg">
              {errors.firstname && <p>{errors.firstname.message}</p>}
            </span>
          </label>
          <label htmlFor="Lastname" className="login-label">
            <div>Nom</div>
            <input
              className="login-input"
              id="adherent"
              type="text"
              name="lastname"
              placeholder="Nom"
              {...register("lastname", {
                required: "Ce champ est requis",
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ\u00C0-\u017F'-]+$/,
                  message:
                    "Veuillez entrer un prénom valide. Seules les lettres sont acceptées.",
                },
              })}
            />
            <span className="errorMsg">
              {errors.lastname && <p>{errors.lastname.message}</p>}
            </span>
          </label>

          <label htmlFor="password" className="login-label">
            Mot de passe :
          </label>
          <input
            className="login-input"
            id="adherent"
            type="password"
            name="password"
            {...register("password", {
              required: "Ce champ est requis",
              minLength: {
                value: 8,
                message: "Le mot de passe doit contenir au moins 8 caractères.",
              },
            })}
          />
          <span className="errorMsg">
            {errors.password && <p>{errors.password.message}</p>}
          </span>
        </div>
        <button className="register-button" type="submit">
          ENREGISTRER
        </button>
      </form>
    </div>
  );
}

export default Register;
