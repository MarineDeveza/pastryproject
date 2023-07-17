/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

function AddPastries() {
  const [reference, setReference] = useState("");
  const [title, setTitle] = useState("");
  const [sizes, setSizes] = useState("");
  const [story, setStory] = useState("");
  const [categoryId, setCategoryId] = useState();
  const [categories, setCategories] = useState([]);
  const [imageId, setImageId] = useState();
  const [images, setImages] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/pastries`, {
        reference,
        title,
        sizes,
        story,
        category_id: categoryId,
        image_id: imageId,
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Confirmation",
          text: "Votre produit a été enregistré avec succès !",
        }).then(() => window.location.reload());
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/images`)
      .then((res) => setImages(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="create-container">
        <h1 className="create-title">Ajouter une pâtisserie</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="reference" className="create-label">
              Référence :{" "}
            </label>
            <input
              className="create-input"
              type="text"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="title" className="create-label">
              Titre/libellé :{" "}
            </label>
            <input
              className="create-input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="sizes" className="create-label">
              Nombre de parts :{" "}
            </label>
            <input
              className="create-input"
              type="text"
              value={sizes}
              onChange={(e) => setSizes(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="story" className="create-label">
              Description :{" "}
            </label>
            <textarea
              className="create-input"
              type="text"
              value={story}
              onChange={(e) => setStory(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="category" className="create-label">
              Catégorie :{" "}
            </label>
            <select
              className="create-select"
              value={categories.id}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option value="">Sélectionnez une catégorie</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.category}
                </option>
              ))}
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="photo" className="create-label">
              Choisissez :{" "}
            </label>
            <select
              className="create-select"
              value={images.id}
              onChange={(e) => setImageId(e.target.value)}
            >
              <option value="">Sélectionnez une photo</option>
              {images.map((image) => (
                <option key={image.id} value={image.id}>
                  {image.description}
                </option>
              ))}
            </select>
          </div>
          <button className="create-button" type="submit">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPastries;
