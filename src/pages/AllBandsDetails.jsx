import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AllBandsDetails() {
  const params = useParams();
  console.log(params);
  //create an state to store the external data
  const [bandDetails, setBandDetails] = useState(null);

  //useEffect componentDidMount to call the data just when the component is created for the first time
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/api/band/${params.bandId}`
      );
      console.log(response);
      setBandDetails(response.data);
    } catch (error) {
      console.log();
    }
  };
  //calling the API
  if (bandDetails === null) {
    return <h1>...loading</h1>;
  }

  return (
    <div>
      <h1>{bandDetails.name}</h1>

      <h3>{bandDetails.genre}</h3>
      <h6>{bandDetails.country}</h6>
      {/* {bandDetails.image---------------------------}*/}
      <p>{bandDetails.description}</p>
    </div>
  );
}

export default AllBandsDetails;
