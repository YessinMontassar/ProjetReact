import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useShoppingCart } from 'use-shopping-cart';
import { Link}  from 'react-router-dom';

function ElementCart(props) {
    const{cartCount,addItem} = useShoppingCart();
    const addToCart=(horse)=>{
        const target = {
                            id:horse.id,
                            title: horse.name,
                            image: horse.imagehorse,
                            price: horse.prixVente,
                            qtestock:horse.Qte,                                 
                            quantite : 1
          };
          addItem(target)
          console.log('Item added to cart:',target); 


    };
    

    
  return (<>
                    <Box sx={{ flexGrow: 1 }} >
                    <AppBar position="static" style={{"backgroundColor":"black"}}>
                    <Toolbar>
                      {cartCount}   
                        
                        <AddShoppingCartIcon/>
                        
                        <Button color="inherit"> <Link to="/cart">Shopping</Link></Button> <cartCount/>
                    </Toolbar>
                    </AppBar>
                </Box>
    
       <div className="container">
           

      <div className="row">
        {props.horses.map((horse) => {
          return (
            <Card sx={{ maxWidth: 345 }} style={{margin:30,backgroundColor:'white'}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={horse.imagehorse}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {horse.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {horse.prixVente} TND
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button disabled={horse.qtestock <= 1}  size="small" color="primary" style={{"backgroundColor":"black","color":"white"}} onClick={() => addToCart(horse)}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
    </>

  );
}

export default ElementCart;
