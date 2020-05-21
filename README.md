This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `Context API - useContext`

**1.-** Se crea una carpeta dentro de src con el nombre de context.<br />
**2.-** Dentro de la misma creamos el archivo .JS con el nombre del context `CategoriasContext`<br />
**3.-** Dentro la estructura del `CONTEXT` seria algo asi: <br />

``import React, { useState, createContext } from 'react';`` <br />

// 1.-Crear el Context <br />
``export const CategoriasContext = createContext();`` <br />

// 2.-Creamos el Provider: es donde se encuentran las funciones y states del context <br />
``const CategoriasProvider = (props) => {`` <br />  <br />
    //Creamos el state <br />
    ``const [hola, setHola] = useState('hola');`` <br /> <br />
    ``return (`` <br />
        //Retornaamos el context y dentro invocamos los childrens de todos los componentes del padre a usar <br />
        ``>CategoriasContext.Provider`` <br />
            //Pasamos lo que queremos compartir a los hijos <br />
            ``value={{`` <br />
                ``hola,`` <br />
                ``setHola`` <br />
            ``}}`` <br />
        ``<`` <br />
            ``{props.children}`` <br />
        ``>/CategoriasContext.Provider<`` <br />
    ``)`` <br />
``}`` <br /> <br />
// 3.-Exportamos el Provider <br /> 
``export default CategoriasProvider;`` <br /> <br />

**4.-**Para usar el `CONTEXT` tenemos que **importarlo** y luego **colocarlo** en el componente **padre** y llamarlo como un FRAGMENT pero por su nombre `CategoriasContext` <br /> <br />

**5.-**Para consumir el context desde cualquier hijo de la rama solo se tiene que:<br /> <br />
        **5.1.-**Importamos el `Context`: `import { Nombre } from '../context/nombre';`<br />
        **5.2.-**Tomamos por destructuring los elementos a usar `const { elemento } = Nombre`<br />
        **5.3.-**Usamos el elemento a nuestra conveniencia `elemento`<br />

**Nota: Se pueden observar varios ejemplos en los Context creados en el proyecto!**

### `API`

API para `Cocteles`<br />
Link: [https://www.thecocktaildb.com/api.php]<br />
Endpoint Ingredients: [https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Dry_Vermouth,Gin,Anis]<br />
EdnPoint `Compuesta`: solo agregamos el & y luego el c=valor para la categoria segun la Doc.<br />
Endpoint I/C: [https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Ton&c=Ordinary_Drink]<br />

### `Usando MODALS en React`

#### `Material UI`

Es una de las maneras mas sencillas de usar modals en nuestros proyectos de react.<br />
Link: [https://material-ui.com/].<br />
Instalacion: `npm i @material-ui/core`.<br />

**Nota: Las instrucciones de como generar el modal se encuentran en el componente Receta.js!**

