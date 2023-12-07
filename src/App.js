import './App.css';
import ListHorses from './components/ListHorses';
import AddHorse from './components/AddHorse';
import EditHorse from './components/EditHorse';
import ElementsHorse from './components/ElementsHorse';
import ListCart from './ClientSide/ListCart';
import Menu2 from './Menu2';
import { CartProvider } from 'use-shopping-cart';
import Cart from "./ClientSide/Cart";
import PdfCart from "./ClientSide/PdfCart";
import Signup from "./authentificationClient/Signup";
import Loginclient from './authentificationClient/loginClient';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    
   
   
    {/*<ListHprses />*/}
    {/*<Router>
    <Menu2/>
 
       <Routes>
          <Route path='/horses' element={<ListHorses/>}/>
          <Route path='/AddHorse' element={<AddHorse/>}/>
          <Route path='/editHorse/:id' element={<EditHorse/>}/>
          <Route path='/' element={<ListHorses/>}/>
 

        </Routes>
    </Router>*/}
     {/*<Router>
   <Menu/>
   <Routes>
    <Route path='/articles' element={<ListArticles/>}/>
    <Route path='/AddArticle' element={<AddArticle/>}/>
    <Route path='/editArticle/:id' element={<EditArticle/>}/>
    <Route path='/' element={<ListArticles/>}/>
    

   </Routes>
   </Router> */}
    <CartProvider>
   
 
   <Router>
   <Menu2/>
   <Routes>
   <Route path='/AddHorse' element={<AddHorse/>}/>
   <Route path='/editHorse/:id' element={<EditHorse/>}/>
    <Route path='/' element={<ListCart/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/pdfCart' element={<PdfCart/>}/>
    <Route path="/loginclient" exact element={<Loginclient/>}/>
    <Route path="/signup" exact element={<Signup/>}/>
    <Route path='/horses' element={<ListHorses/>}/>
   </Routes>
   </Router>
   </CartProvider>
 
  
</>
 
  );
}

export default App;
