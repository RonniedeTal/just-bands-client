import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import service from '../services/index.services';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context'; 

function EditBand() {

  const{authenticatedUser, isLoggedIn, loggedUserId}=useContext(AuthContext)

    const params=useParams()
    const navigate=useNavigate()

    const [name, setName]=useState("")
    const [description, setDescription]=useState("")
    const [country, setCountry] = useState("");
    const[owner, setOwner]=useState("")

  const [grunge, setGrunge]=useState(false)
  const [metal, setMetal]=useState(false)
  const [stoner, setStoner]=useState(false)
  const [alternative, setAlternative]=useState(false)
  const [hardcore, setHardcore]=useState(false)
  const [progressive, setProgressive]=useState(false)
  const [deathmetal, setDeathMetal]=useState(false)
  const [psychedelic, setPsychedelic]=useState(false)
  const [punk, setPunk]=useState(false)
  const [grindcore, setGrindcore]=useState(false)
  const [thrash, setThrash]=useState(false)
  const [others, setOthers]=useState(false)

  useEffect(() => {
    getData();
  }, []);

 
  //useEffect componentDidMount to call the data just when the component is created for the first time
 

  const getData = async () => {
    
    try {
       const response=await service.get(`band/${params.bandId}`)
        
       setOwner(response.data.owner);
       setName(response.data.name)
       setDescription(response.data.description)
       setCountry(response.data.country)
       //console.log(response.data.genre)//este es el array de generos actuales

       //si el array de strings incluye metal entonces cambiamos el estado de metal a true
       if(response.data.genre.includes("Metal")){
        setMetal(true)
       }
       if(response.data.genre.includes("Grunge")){
        setGrunge(true)
       }

       if(response.data.genre.includes("Stoner")){
        setStoner(true)
       }
       if(response.data.genre.includes("Alternative")){
        setAlternative(true)
       }
       if(response.data.genre.includes("Hardcore")){
        setHardcore(true)
       }
       if(response.data.genre.includes("Progressive")){
        setProgressive(true)
       }
       if(response.data.genre.includes("DeathMetal")){
        setDeathMetal(true)
       }
       if(response.data.genre.includes("Psychedelic")){
        setPsychedelic(true)
       }
       if(response.data.genre.includes("Punk")){
        setPunk(true)
       }
       if(response.data.genre.includes("Grindcore")){
        setGrindcore(true)
       }
       if(response.data.genre.includes("Thrash")){
        setThrash(true)
       }
       if(response.data.genre.includes("Others")){
        setOthers(true)
       }

    } catch (error) {
      navigate("/error");
    }
  };
  //calling the API
 

  const handleSubmitEdit=async(e)=>{
    e.preventDefault()

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
                            
     const editBand={
        id:params.id,
        name,
        description,
        genre:genresArr,
        country
     }
     try {
        const response =await service.put(`/band/${params.bandId}`, editBand)
            console.log(response);
            navigate("/all-bands")
     } catch (error) {
        navigate("/error")
        
     }
  }

  const deleteBand=async()=>{
   

    try {
      
      await service.delete(`band/${params.bandId}`)
        
        navigate("/all-bands")
    } catch (error) {
        navigate("/error")
        
    }
  }

  return (
    <div>
       <h3>Post your Band</h3>
      < Form onSubmit={handleSubmitEdit} >
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
            checked={grunge}
            onChange={(e) => setGrunge(!grunge)}
          />
       
          <Form.Label>Metal</Form.Label>
          <input
            type="checkbox"
            genre="Metal"
            checked={metal}
            onChange={(e) => setMetal(!metal)}
          />
        
        
          <Form.Label>Stoner</Form.Label>

          <input
            type="checkbox"
            genre="Stoner"
            checked={stoner}
            onChange={(e) => setStoner(!stoner)}
          />
        
          <Form.Label>Alternative</Form.Label>
          <input
            type="checkbox"
            genre="Alternative"
            checked={alternative}
            onChange={(e) => setAlternative(!alternative)}
          />
        
          <Form.Label>Hardcore</Form.Label>

          <input
            type="checkbox"
            genre="Hardcore"
            checked={hardcore}
            onChange={(e) => setHardcore(!hardcore)}
          />
        
          <Form.Label>Progressive</Form.Label>
          <input
            type="checkbox"
            genre="Progressive"
            checked={progressive}
            onChange={(e) => setProgressive(!progressive)}
          />
         
        
          <Form.Label>DeathMetal</Form.Label>

          <input
            type="checkbox"
            genre="DeathMetal"
            checked={deathmetal}
            onChange={(e) => setDeathMetal(!deathmetal)}
          />
        
          <Form.Label>Psychedelic</Form.Label>
          <input
            type="checkbox"
            genre="Psychedelic"
            checked={psychedelic}
            onChange={(e) => setPsychedelic(!psychedelic)}
          />
        
          <Form.Label>Punk</Form.Label>

          <input
            type="checkbox"
            genre="Punk"
            checked={punk}
            onChange={(e) => setPunk(!punk)}
          />
        
          <Form.Label>Grindcore</Form.Label>
          <input
            type="checkbox"
            genre="Grindcore"
            checked={grindcore}
            onChange={(e) => setGrindcore(!grindcore)}
          />
        
          <Form.Label>Thrash</Form.Label>

          <input
            type="checkbox"
            genre="Thrash"
            checked={thrash}
            onChange={(e) => setThrash(!thrash)}
          />
        
          <Form.Label>Others</Form.Label>
          <input
            type="checkbox"
            genre="Others"
            checked={others}
            onChange={(e) => setOthers(!others)}
          /> 
          </Form.Group>
        </div>
<Button variant="dark" type="submit">Submit</Button>
        
        </Form>
        {isLoggedIn&&loggedUserId===owner._id && (
        <Button variant="dark" onClick={deleteBand}>Delete</Button>)}
    </div>
   
  )
}

export default EditBand
