import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateABand() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState([]);
  const [country, setCountry] = useState("");

  const handleCheckBox = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBand = {
      name,
      //image,-----to add---
      description, //---to add---
      //songs----to add----
      genre, //use a checkbox
      country,
      crew,
    };
    try {
      const response = axios.post("https://localhost:5005/api/band", newBand);
      console.log("creating a band");
      navigate("/all-bands");
    } catch (error) {
      console.log(error);
    }

    //second argument is the body, we're sending to the BEnd
  };
  return (
    <div>
      <h3>Post your Band</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Band Name : </label>
          <input
            type="text"
            name="Band name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>About the Band :</label>
          <textarea
            type="text"
            description="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />{" "}
          <br />
          <div>
            <label>Country:</label>
            <input
              type="text"
              name="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <br />
        </div>

        <div>
          <h3>Choose all your Genres:</h3>
          <label>Grunge </label>

          <input
            type="checkbox"
            genre="Grunge"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label>Metal</label>
          <input
            type="checkbox"
            genre="Metal"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label>Stoner</label>

          <input
            type="checkbox"
            genre="Stoner"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label>Alternative</label>
          <input
            type="checkbox"
            genre="Alternative"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label>Hardcore</label>

          <input
            type="checkbox"
            genre="Hardcore"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label>Progressive</label>
          <input
            type="checkbox"
            genre="Progressive"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label>DeathMetal</label>

          <input
            type="checkbox"
            genre="DeathMetal"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label>Psychedelic</label>
          <input
            type="checkbox"
            genre="Psychedelic"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label>Punk</label>

          <input
            type="checkbox"
            genre="Punk"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label>Grindcore</label>
          <input
            type="checkbox"
            genre="Grindcore"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label>Thrash</label>

          <input
            type="checkbox"
            genre="Thrash"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label>Others</label>
          <input
            type="checkbox"
            genre="Others"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateABand;
