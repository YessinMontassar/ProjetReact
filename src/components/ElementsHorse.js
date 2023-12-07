import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
function ElementsHorse(props) {
     return ( 
   <div className="container">
    <div className="row">
   {
   props.horses.map(horse =>{
   return(
    <Card sx={{ maxWidth: 345 }} style={{margin:5,backgroundColor:'white'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="280"
        image={horse.imagehorse}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="black">
          {horse.name}
        </Typography>
        <Typography variant="body2" color="black">
         the race of {horse.name} is {horse.race} ,and the number of win is {horse.win} 
        </Typography>
      </CardContent>
      <CardActions>
        <Link  style={{"decoration":"none","backgroundColor":"Black"}} to={`/editHorse/${horse.id}`} className="btn btn-success" >Modifier</Link>
        
        <Button style={{"decoration":"none","backgroundColor":"red","color":"white"}} size="small" onClick={()=>{props.deleteProd(horse.id)}} >Supprimer</Button>
      </CardActions>
    </Card>
)
})
}
   </div>
   </div>
     );
   }
   
   export default ElementsHorse;