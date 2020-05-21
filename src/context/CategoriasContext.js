import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

// 1.-Crear el Context
export const CategoriasContext = createContext();

// 2.-Creamos el Provider: es donde se encuentran las funciones y states del context
const CategoriasProvider = (props) => {
    
    //Creamos el state de categorias
    const [categorias, setCategorias] = useState([]);

    //Ejecutamos la llamada de la API para obtener las categorias
    useEffect(() => {
        const ObtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const resultado = await axios.get(url);
            setCategorias(resultado.data.drinks);
        }
        ObtenerCategorias()
    }, [])

    return (
        //Retornaamos el context y dentro invocamos los childrens de todos los componentes del padre a usar
        <CategoriasContext.Provider
            //Pasamos lo que queremos compartir a los hijos
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

// 3.-Exportamos el Provider 
export default CategoriasProvider;