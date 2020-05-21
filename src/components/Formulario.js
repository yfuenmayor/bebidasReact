import React, { useContext, useState} from 'react';
import PropTypes from 'prop-types';
//Importamos el Context
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = props => {

    //Para obtener los datos del Context usamos useContext
    const { categorias } = useContext(CategoriasContext);
    const { setBuscar, setEjecutar } = useContext(RecetasContext);
    
    // STATES //
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    //Funcion para leer los contenidos
    const obtenerDatos = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const buscarReceta = e => {
        e.preventDefault();
        setBuscar(busqueda); 
        setEjecutar(true);
    }

    return (
        <form 
         className="col-12"
         onSubmit={buscarReceta}
        >
            <fieldset className="text-center">
                <legend>Busca Bebidas por Categoria o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                {/* NOOMBRE */}
                <div className="col-md-4">
                    <input 
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Busca por Ingrediente"
                        onChange={obtenerDatos}
                    />
                </div>
                {/* CATEGORIA */}
                <div className="col-md-4">
                    <select 
                        name="categoria"
                        className="form-control"
                        onChange={obtenerDatos}
                    >
                        <option value="">- Selecciona Categoria -</option>
                        {categorias.map(categoria => (
                        <option 
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                        >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                {/* SUBMIT BOTON */}
                <div className="col-md-4">
                    <input 
                        type="submit" 
                        value="Buscar Bebidas"
                        className="btn btn-block btn-primary"
                    />
                </div>
            </div>
        </form>
    );
};

Formulario.propTypes = {
    
};

export default Formulario;