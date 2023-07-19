import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../services/OnlineContext";

function PastryCards() {
  const [pastries, setPastries] = useState([]);
  const [filteredPastries, setFilteredPastries] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { isOnline } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/pastries`)
      .then((res) => {
        setPastries(res.data);
        setFilteredPastries(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    let filtered = pastries;

    if (selectedCategory !== "") {
      filtered = filtered.filter(
        (pastry) => pastry.category_id.toString() === selectedCategory
      );
    }
    setFilteredPastries(filtered);
  }, [pastries, selectedCategory]);

  const handleDelete = (cakeId) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/pastries/${cakeId}`)
      .then(() => {
        setPastries((prevPastries) =>
          prevPastries.filter((cake) => cake.id !== cakeId)
        );
      });
  };

  const handleCategoryFilter = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="pastries_page">
      <div className="pastries-container">
        <span>Pâtisseries</span>
        <div className="filter-container">
          <label htmlFor="categoryFilter">Filtrer par : </label>
          <select
            id="categoryFilter"
            value={selectedCategory}
            onChange={handleCategoryFilter}
          >
            <option value="">Toutes les catégories</option>
            <option value="1">Tout chocolat</option>
            <option value="2">Diététique</option>
            <option value="3">Aux fruits</option>
            <option value="4">Traditionnel</option>
          </select>
        </div>
        <div className="cakelist">
          {filteredPastries.length &&
            filteredPastries.map((pastry) => (
              <div key={pastry.id} className="singlecakelist">
                <img
                  className="card_img"
                  src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                    pastry.src
                  }`}
                  alt={pastry.description}
                />
                <p>{pastry.category}</p>
                <p>{pastry.reference}</p>
                <p>{pastry.title}</p>
                <p>{pastry.sizes}</p>
                <p>{pastry.story}</p>
                {isOnline && (
                  <Link to={`/edit/${pastry.id}`}>
                    <button type="button" className="modify-button">
                      Modifier
                    </button>
                  </Link>
                )}
                {isOnline && (
                  <div>
                    <button
                      type="button"
                      onClick={() => handleDelete(pastry.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PastryCards;
