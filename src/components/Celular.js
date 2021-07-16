import React from 'react';
import './estilos.css'

const Celular = ({ celular, cart, setCart, celulares }) => {


    //Constantes que guarda las propiedades del estado
    const { nombre, precio, id , unidades=1} = celular;

    //Funcion para agregar celular  al cart
    const addCelular = (id) => {
        
        const celular = celulares.filter((celular) => celular.id === id);//verifica que exista en celulares
        //Verificar si existe en carrito...
        const carrito = cart.filter((cart) => cart.id === id);
        console.log(carrito)

        if(carrito.length > 0){
            //Hay coincidencias, aumentar el numero y multiplicar el precio por el numero de articulos del mismo tipo
            celular[0].unidades=celular[0].unidades+1
           setCart([...cart]);

        }else{
            //No hay coincidencias, agregarlo normalmente
            setCart([...cart, ...celular]);
        }
        //setCart([...cart, ...celular]);
    };

    // Funcion para eliminar un celular
    const delCelular = (id) => {
        const celulares = cart.filter(celular => celular.id !== id);

        setCart(celulares);
    }

    return (
        <div>
            <ul className="celcard">
                <li>{nombre}</li>
                <li>${precio*unidades}</li>
                <li>Unidades: {unidades}</li>

                {celulares ? (
                    (
                        <button className='agregar' type='button' onClick={() => addCelular(id)}>
                            Agregar Al Carrito
                        </button>
                    )
                )
                    : (
                        <div>
                            
                            <button className='eliminar' type='button' onClick={() => delCelular(id)}>
                                Eliminar
                            </button>
                        </div>
                    )}

            </ul>
        </div>
    );
};

export default Celular;