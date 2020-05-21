import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

//Creando el context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    // STATES //
    // Guardar el id de la receta a consultar
    const [idreceta, setIdreceta] = useState(null);
    // Guardar resultados de la receta
    const [recetai, setRecetai] = useState({});

    // Consultar API para obtener los datos de la receta una vez teniendo el id guardado 
    useEffect(() => {
        const consultaApi = async () => {
            //Validamos si esta null no se ejecute 
            if(!idreceta) return;
            
            //URL
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const resultado = await axios.get(url);
            setRecetai(resultado.data.drinks[0]);
        }
        consultaApi();
    }, [idreceta])

    return ( 
        <ModalContext.Provider
            value={{
                recetai,
                setRecetai,
                setIdreceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;
