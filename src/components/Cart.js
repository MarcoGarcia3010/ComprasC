import React, { useState , useEffect,} from 'react'; 

//importa los estilos para el cart
import './estilos.css'

// Importa el componente Celular
import Celular from './Celular'




const enviarData = async (url,data)=> {
//   console.log(data);
//   console.log('stringify', JSON.stringify(data));

  const resp= await fetch (url,{
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    doby: JSON.stringify(data),
  })

//   console.log(resp);
}


const Cart = ({cart, setCart}) => {

// useEffect(()=>{
//     console.log(cart);
// },[]);
const enviar = ()=>{
    
        enviarData("http://localhost/carrito/conexion2.php",cart)
        console.log(cart)
    
}


    return(
        <div className='cart'>
            <div>
                <h3>Carrito Compras <button className='confirmar' onClick={()=>enviar()}> Confirmar </button></h3>
            </div>
            {cart.length === 0 ? (<p>0</p>) : (cart.map((celular => <Celular key={celular.id} celular={celular} cart={cart} setCart={setCart} />)))}

        </div>
        );
};

export default Cart;