import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


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
      //crew,
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
      < Form onSubmit={handleSubmit} >
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '15px' }}>
        <Form.Group style={{width:400, }}>
        <Form.Label >Band Name : </Form.Label >
        <Form.Control
            type="text"
            name="Band name"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            </Form.Group>
          
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '15px' }}>
        
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{width:400, }}>
          <Form.Label >About the Band :</Form.Label >
          <Form.Control as="textarea" rows={3} type="text"
            description="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}/>
            
           </Form.Group>
           </div>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '15px' }}>
          <Form.Group style={{width:400, }}>
            <Form.Label>Country:</Form.Label>
            <Form.Control
              type="text"
              name="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            </Form.Group>
          </div>
          <br />
        

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '15px' }}>
        <Form.Group style={{width:400, }}>
          <h3>Choose all your Genres:</h3>
          <Form.Label>Grunge </Form.Label>

          <input
            type="checkbox"
            genre="Grunge"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
       
          <Form.Label>Metal</Form.Label>
          <input
            type="checkbox"
            genre="Metal"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        
        
          <Form.Label>Stoner</Form.Label>

          <input
            type="checkbox"
            genre="Stoner"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        
          <Form.Label>Alternative</Form.Label>
          <input
            type="checkbox"
            genre="Alternative"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        
          <Form.Label>Hardcore</Form.Label>

          <input
            type="checkbox"
            genre="Hardcore"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        
          <Form.Label>Progressive</Form.Label>
          <input
            type="checkbox"
            genre="Progressive"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
         
        
          <Form.Label>DeathMetal</Form.Label>

          <input
            type="checkbox"
            genre="DeathMetal"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        
          <Form.Label>Psychedelic</Form.Label>
          <input
            type="checkbox"
            genre="Psychedelic"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        
          <Form.Label>Punk</Form.Label>

          <input
            type="checkbox"
            genre="Punk"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        
          <Form.Label>Grindcore</Form.Label>
          <input
            type="checkbox"
            genre="Grindcore"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        
          <Form.Label>Thrash</Form.Label>

          <input
            type="checkbox"
            genre="Thrash"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        
          <Form.Label>Others</Form.Label>
          <input
            type="checkbox"
            genre="Others"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          /> 
          </Form.Group>
        </div>

        <Button variant="dark" type="submit">Submit</Button>
        </Form>
    </div>
  );
}

export default CreateABand;
