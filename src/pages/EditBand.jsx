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

  useEffect(() => {
    getData();
  }, []);

 
  //useEffect componentDidMount to call the data just when the component is created for the first time
 

  const getData = async () => {
    
    try {
       const response=await service.get(`band/${params.bandId}`)
        
      setOwner(response.data.owner);
      
    } catch (error) {
      console.log(error);
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

  const deleteBand=async(e)=>{
    e.preventDefault()

    try {
      await authenticatedUser()
        const response=await service.delete(`band/${params.bandId}`)
        console.log(response);
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
        {isLoggedIn&&loggedUserId===owner && (
        <Button variant="dark" onClick={deleteBand}>Delete</Button>)}
    </div>
   
  )
}

export default EditBand
