import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import service from "../services/index.services";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from "/images/logouser.png";

function AllBands() {
  const [allBands, setAllBands] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBands();
  }, []);

  const getBands = async () => {
    try {
      const response = await service.get("/band");
      setAllBands(response.data);
    } catch (error) {
      navigate("/error");
    }
  };

  if (allBands === null) {
    return <div className="loader"></div>;
  }
  return (
    <div>
      <h1>Here we have all our Bands Comunity:</h1>
      <h1>Enjoy</h1>
      <Row xs={1} md={3} className="g-4">
        {allBands.map((eachBand) => (
          <Col key={eachBand._id}>
            <Card className="h-100 custom-card">
              <Link
                to={`/band-details/${eachBand._id}`}
                className="text-decoration-none"
              >
                <Card.Img
                  variant="top"
                  src={eachBand.profileImage || logo}
                  className="band-image"
                />
                <Card.Body>
                  <Card.Title>{eachBand.name}</Card.Title>
                  <Card.Text>{eachBand.genre}</Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AllBands;
