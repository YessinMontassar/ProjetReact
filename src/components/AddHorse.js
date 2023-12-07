import { useState } from 'react';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function AddHorse() {

    const navigate=useNavigate();

  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [type, setType] = useState("");
  const [win, setWin] = useState("");
  const [age, setAge] = useState("");
  const [color, setColor] = useState("");
  const [imagehorse, setImagehorse] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      race,
      type,
      win, 
      age, 
      color,
      imagehorse
    };
  
//faire le add dans la BD
axios.post("http://localhost:3001/Horses",newProduct)
.then(res => {  
console.log(res);
navigate("/horses");
  })   


}

return ( 
<div className="container">
        <h2>Ajout d'un Horse </h2>
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
          type="text"
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

     );
}

export default AddHorse;
