import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logouser from "/images/logouser.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import service from "../services/index.services";

function Home() {
  const [randomBand, setRandomBand] = useState([]);
  useEffect(() => {
    service
      .get("/band/random")
      .then((response) => {
        //console.log(response);
        setRandomBand(response.data);
      })
      .catch((error) => {
        //console.log(error);
      });
  }, []);
  if (randomBand === null) {
    return <h1>...loading</h1>;
  }

  return (
    <div>
      <h3>What to do?</h3>
      <Link to={"/new-band"}>
        <Button variant="dark">Upload Your Band</Button>
      </Link>{" "}
      or check
      <Link to={"/all-bands"}>
        <Button variant="dark">All the Bands</Button>
      </Link>
      <h1> Our Recomendation:</h1>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Card
          border="dark"
          style={{ width: "18rem", backgroundColor: "black" }}
        >
          <Link to={`/band-details/${randomBand._id}`}>
            {/*no me dirige ... revisar la llamada de allbanddetais*/}
            <Card.Header>{randomBand.genre}</Card.Header>
            <Card.Body>
              <Card.Title>{randomBand.name}</Card.Title>
              <img
                src={randomBand.profileImage}
                style={{ width: 250 }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = logouser;
                  e.target.style.width = "250px";
                  e.target.style.height = "250px";
                }}
              />
              <Card.Text>{randomBand.country}</Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default Home;
