import React, { useState, createContext, useEffect } from 'react';
import Axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    // STATES //
    // Para ejecutar la consulta
    const [ejecutar, setEjecutar] = useState(false);
    //Guardar los resultados de la consulta a la API
    const [recetas, setRecetas] = useState([]);
    //Guardar tados para la busqueda
    const [buscar, setBuscar] = useState({
        nombre: '',
        categoria: ''
    });

    //Ejecutamos la consulta
    useEffect(() => {

        const obtenerReceta = async () => {
            if (ejecutar) {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${buscar.nombre}&c=${buscar.categoria}`;
                const resultado = await Axios.get(url);
                // console.log(resultado.data.drinks);
                setRecetas(resultado.data.drinks);
            }
        }

        obtenerReceta();

    }, [buscar])

    return ( 
        <RecetasContext.Provider
            value={{
                recetas,
                setBuscar,
                setEjecutar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;

