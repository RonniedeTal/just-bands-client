import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import service from "../services/index.services";


function CreateABand() {
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState(null); 
const [isUploading, setIsUploading] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState([]);
  const [country, setCountry] = useState("");
  const [grunge, setGrunge]=useState(false)
  const [metal, setMetal]=useState("")
  const [stoner, setStoner]=useState("")
  const [alternative, setAlternative]=useState("")
  const [hardcore, setHardcore]=useState("")
  const [progressive, setProgressive]=useState("")
  const [deathmetal, setDeathMetal]=useState("")
  const [psychedelic, setPsychedelic]=useState("")
  const [punk, setPunk]=useState("")
  const [grindcore, setGrindcore]=useState("")
  const [thrash, setThrash]=useState("")
  const [others, setOthers]=useState("")

  
  const handleFileUpload = async (event) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
  
    if (!event.target.files[0]) {
      // to prevent accidentally clicking the choose file button and not selecting a file
      return;
    }
  
    setIsUploading(true); // to start the loading animation
  
    const uploadData = new FormData(); // images and other files need to be sent to the backend in a FormData
    uploadData.append("image", event.target.files[0]);
    //                   |
    //     this name needs to match the name used in the middleware in the backend => uploader.single("image")
  
    try {
      const response = await axios.post("http://localhost:5005/api/upload", uploadData)
      // !IMPORTANT: Adapt the request structure to the one in your proyect (services, .env, auth, etc...)
  
      setImageUrl(response.data.imageUrl);
      //                          |
      //     this is how the backend sends the image to the frontend => res.json({ imageUrl: req.file.path });
  
      setIsUploading(false); // to stop the loading animation

    } catch (error) {
      navigate("/error");
    }
  };


  const handleSubmit = async(e) => {
    e.preventDefault();

    const genresArr=[]
    if (grunge)genresArr.push("Grunge")
      if (metal)genresArr.push("Metal")
        if (stoner)genresArr.push("Stoner")
          if (alternative)genresArr.push("Alternative")
            if (hardcore)genresArr.push("Hardcore")
              if (progressive)genresArr.push("Progressive")
                if (deathmetal)genresArr.push("DeathMetal")
                  if (psychedelic)genresArr.push("Psychedelic")
                    if (punk)genresArr.push("Punk")
                      if (grindcore)genresArr.push("Grindcore")
                        if (thrash)genresArr.push("Thrash")
                          if (others)genresArr.push("Others")

//const authToken=localStorage.getItem("authToken")

    const newBand = {
      name,
      profileImage:imageUrl,
      description, //---to add---
      //songs----to add----
      genre:genresArr, //use a checkbox
      country,
      //crew,
    };
    try {
      
      const response = await service.post("/band", newBand)
      console.log("creating a band" ,response.data);
      navigate("/all-bands");
    } catch (error) {
      console.log(error);
    }

    //second argument is the body, we're sending to the BEnd
  };
  return (
    
    <div>
      <div>
  <label>Image: </label>
  <input
    type="file"
    name="image"
    onChange={handleFileUpload}
    disabled={isUploading}
  />
 
</div>;


{isUploading ? <h3>... uploading image</h3> : null}

{/* below line will render a preview of the image from cloudinary */}
{imageUrl ? (<div><img src={imageUrl} alt="img" width={200} /></div>) : null}

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
            value={grunge}
            onChange={(e) => setGrunge(!grunge)}
          />
       
          <Form.Label>Metal</Form.Label>
          <input
            type="checkbox"
            genre="Metal"
            value={metal}
            onChange={(e) => setMetal(!metal)}
          />
        
        
          <Form.Label>Stoner</Form.Label>

          <input
            type="checkbox"
            genre="Stoner"
            value={stoner}
            onChange={(e) => setStoner(!stoner)}
          />
        
          <Form.Label>Alternative</Form.Label>
          <input
            type="checkbox"
            genre="Alternative"
            value={alternative}
            onChange={(e) => setAlternative(!alternative)}
          />
        
          <Form.Label>Hardcore</Form.Label>

          <input
            type="checkbox"
            genre="Hardcore"
            value={hardcore}
            onChange={(e) => setHardcore(!hardcore)}
          />
        
          <Form.Label>Progressive</Form.Label>
          <input
            type="checkbox"
            genre="Progressive"
            value={progressive}
            onChange={(e) => setProgressive(!progressive)}
          />
         
        
          <Form.Label>DeathMetal</Form.Label>

          <input
            type="checkbox"
            genre="DeathMetal"
            value={deathmetal}
            onChange={(e) => setDeathMetal(!deathmetal)}
          />
        
          <Form.Label>Psychedelic</Form.Label>
          <input
            type="checkbox"
            genre="Psychedelic"
            value={psychedelic}
            onChange={(e) => setPsychedelic(!psychedelic)}
          />
        
          <Form.Label>Punk</Form.Label>

          <input
            type="checkbox"
            genre="Punk"
            value={punk}
            onChange={(e) => setPunk(!punk)}
          />
        
          <Form.Label>Grindcore</Form.Label>
          <input
            type="checkbox"
            genre="Grindcore"
            value={grindcore}
            onChange={(e) => setGrindcore(!grindcore)}
          />
        
          <Form.Label>Thrash</Form.Label>

          <input
            type="checkbox"
            genre="Thrash"
            value={thrash}
            onChange={(e) => setThrash(!thrash)}
          />
        
          <Form.Label>Others</Form.Label>
          <input
            type="checkbox"
            genre="Others"
            value={others}
            onChange={(e) => setOthers(!others)}
          /> 
          </Form.Group>
        </div>

        <Button variant="dark" type="submit">Submit</Button>
        </Form>
    </div>
  );
}

export default CreateABand;
