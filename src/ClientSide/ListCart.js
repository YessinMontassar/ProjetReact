import axios from 'axios';
import {useEffect,useState} from 'react';
import ElementCart from './ElementCart';
function ListCart() {
    const[horses,setHorses]=useState([]);
    useEffect(() => {
   axios.get("http://localhost:3001/Horses")
    .then((response)=>setHorses(response.data));
   }, []);
    return(<>
    <h2>Liste des chevaux </h2>
    <ElementCart horses={horses}/>
    </>);
    
}export default ListCart;