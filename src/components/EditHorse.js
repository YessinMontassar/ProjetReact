import { useState,useEffect  } from 'react';

import axios from 'axios';

import { useNavigate , useParams} from 'react-router-dom';

function EditArticle() {

    const navigate=useNavigate();

  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [type, setType] = useState("");
  const [win, setWin] = useState("");
  const [age, setAge] = useState("");
  const [color, setColor] = useState("");
  const [imagehorse, setImagehorse] = useState("");
    
    const {id} = useParams();

    useEffect(()=>{
      axios.get('http://localhost:3001/Horses/'+id).then(res => {
          setName(res.data.name);
          setRace(res.data.race);
          setType(res.data.type);
          setWin(res.data.win);
          setAge(res.data.age);
          setColor(res.data.color);
          setImagehorse(res.data.imagehorse);
      })
    },[id]);

    
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newProduct = {
        id:id,
        name,
        race,
        type,
        win, 
        age, 
        color,
        imagehorse
      };
    
   axios.put("http://localhost:3001/Horses/"+id,newProduct)
  .then(res => {  
  console.log(res);
  navigate("/horses")
    })   
  .catch(error=>{
      console.log(error)
      alert("Erreur ! Modification non effectuée")
      })
  
  }

    return ( 
        <>
        <div className="container">
        <h2>Modification d'un Horse </h2>
        <form onSubmit={handleSubmit}>
    <div className="grid gap-3">
    <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}   
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="race"
          name="race"
          type="text"
          value={race}
          onChange={e => setRace(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Type"
          type="text"
          value={type}
          onChange={e => setType(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Win"
          type="number"
          value={win}
          onChange={e => setWin(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Age"
          name="age"
          type="number"
          value={age}
          onChange={e => setAge(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Color"
          type="number"
          value={color}
          onChange={e => setColor(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
     <input className="form-control"
          placeholder="Image"
          type="text"
          value={imagehorse}
          onChange={e => setImagehorse(e.target.value)}
          />
    </div>    
    <div>{imagehorse ?<img src={imagehorse} alt="" width="70"/>:null}</div> 
     <div>
    <button className="btn btn-success">Valider</button>
    </div>  
    </div>
    </form>
   
  </div>
  </>
     );
}

export default EditArticle;
