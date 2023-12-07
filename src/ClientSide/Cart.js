import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Plus from '@mui/icons-material/AddAlarm';
import Minus from '@mui/icons-material/RemoveCircle';
import Delete from '@mui/icons-material/Delete';
import StripeCheckout from 'react-stripe-checkout';


const Cart = () => {
  const { cartDetails, removeItem , clearCart, totalPrice, cartCount,incrementItem,decrementItem } = useShoppingCart();
  const navigate = useNavigate();
  
  

  const [payment, setpayment] = React.useState(false);

const onToken = (token) => {
  // pour finaliser la transaction vous pouvez aussi envoyer le token au backend
  console.log(token);
  //vider le cart
  clearCart();
  //naviguer vers la page d'accueil
  navigate('/');
  
  const onToken = (token) => {
     // pour finaliser la transaction vous pouvez aussi envoyer le token au backend
     console.log(token);
     //vider le cart
     clearCart();
     //naviguer vers la page d'accueil
     navigate('/');
    };
    
    const commander = async() => {
 
       setpayment(true);
      
      };
};

  const commander = async() => {
  
   setpayment(true);

 };


  const more = () => {
    navigate('/');
  };

  const clear = () => {
    clearCart();
  };
  const imprimer = () => {
    navigate('/pdfCart');
   };

  if (cartCount === 0) return <h1>Cart Empty</h1>;

  return (
    <div>
    {payment ? <StripeCheckout
 token={onToken}
 stripeKey="pk_test_51OKM9LJIHwC4q2xJVUEejdv4T619cTc5PaoRiwwLCJF5xAVlugMsJzcTuVl4QXo1BJZ1OOW2F9QnI98qE8JTWv7T00mcFtqvKN"
 amount={totalPrice*100} // Montant en centimes
 currency="USD" // Devise
/> :null}

      <Grid container spacing={2} columns={15} marginTop={10} marginLeft={10}>
        <Grid item xs={8}>
          {cartDetails && Object.values(cartDetails).map((item) => { 
            return (
              <Grid item xs={8} key={item.id}>
                <img
                  alt={item.title}
                  style={{ margin: "0 auto", maxHeight: "100px" }}
                  src={item.image} 
                  className="img-fluid d-block"
                />
                <h5>{item.title}</h5>
                <p>Prix: {(item.price)} TND</p>
                
                
                
                {item.quantity  && (
                  <button onClick={() => removeItem(item.id)}>
                    <Delete color="error" />
                  </button>
           ) }
                <hr />
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={5}>
          <Button color="error" variant="outlined" onClick={more}>
            Ajouter des chevaux
          </Button>
          <p>Total chevaux</p>
          <h4>{cartCount}</h4>
          <p>Total Payement</p>
          <h3>{totalPrice} TND</h3>
          <hr />
          <div>
          <Button color="secondary" variant="outlined" onClick={imprimer}>
              Imprimer PDF
          </Button>
            <Button color="warning" variant="outlined" onClick={commander}>
              Commander
            </Button>
            <Button color="info" variant="outlined" onClick={clear}>
              Annuler
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
