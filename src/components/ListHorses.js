import axios from 'axios';
import {useEffect,useState} from 'react';
import ElementsHorse from './ElementsHorse';
import Card from 'react-bootstrap/Card';
function ListHorses() {
 const[horses,setHorses]=useState([]);
 useEffect(() => {
axios.get("http://localhost:3001/Horses")
 .then((res)=>setHorses(res.data));
}, []);
const deleteProd = async (id) => {
        if (!window.confirm("Are you sure you want to delete")) {
         return;
        }
      
        axios.delete('http://localhost:3001/Horses/' + id)
         .then(() => {
          console.log('successfully deleted!')
          setHorses(prevArticles => prevArticles.filter((horse) => horse.id !== id));
         }).catch((error) => {
          console.log(error)
         })
      
       }
 return ( 
<>  <Card className="bg-dark text-white">
      <Card.Img src="images/horses1.jpg" alt="Card image"  height={500}/>
      <Card.ImgOverlay>
        <Card.Title style={{color: 'black'}}>Liste des cheveaux</Card.Title>
        
        
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
    <br></br>
 <ElementsHorse horses={horses} deleteProd={deleteProd} />
 </>);
}

export default ListHorses;