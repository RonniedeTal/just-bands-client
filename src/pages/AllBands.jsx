import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBands() {
  const [allBands, setAllBands] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5005/api/band")
      .then((response) => {
        console.log(response);
        setAllBands(response.data);
      })
      .catch((error) => {
        console.log(error); //---------añadir el error page
      });
  }, []);

  return (
    <div>
      {allBands.map((eachBand) => (
        <div key={eachBand._id}>
          <Link to={`/band-details/${eachBand._id}`}>
            <p>{eachBand.name}</p> 
            
            <p>{eachBand.genre}</p> 
            {/* addimg ---------------------*/}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllBands;
