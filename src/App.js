import React, { Fragment, useState } from 'react'; 
import Celular from './components/Celular';
import Cart from './components/Cart';
import './components/estilos.css';


function App() {

  
  //Estado de celulares con listado
  const [celulares, setCelulares] = useState([
    {id: 1, nombre: 'Celular Samsung A21s', precio: 4302,unidades: 1},
    {id: 2, nombre: 'Celular Xiaomi Redmi Note 9S', precio: 5899,unidades: 1},
    {id: 3, nombre: 'Celular ZTE Blade A5', precio: 2479,unidades: 1},
    {id: 4, nombre: 'Celular Iphone 8 Plus ', precio: 8199,unidades: 1},
    {id: 5, nombre: 'Celular Moto G30', precio: 4999,unidades: 1},
    {id: 6, nombre: 'Celular Huawei P30', precio: 10399,unidades: 1},
    {id: 7, nombre: 'Celular Sony Xperia X', precio: 9999,unidades: 1}
  ])


  //Estado del carrito
  const[cart, setCart]= useState([])

  

  return (

    
    <Fragment>
<div>
       <h3 className='titulo'>Celulares a la Venta</h3>
       {celulares.map((celular) =>(
         <Celular
           key={celular.id}
           celular={celular}
           cart={cart}
           setCart={setCart}
           celulares={celulares}
         />
       ))}
</div> 
<div>
     <Cart
      cart= {cart}
      setCart={setCart}
     />
</div>
    </Fragment>
    

  );
  
}

export default App;