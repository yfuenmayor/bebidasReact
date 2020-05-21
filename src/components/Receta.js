import React, {useContext, useState} from 'react';
import { ModalContext } from '../context/ModalContext';
import PropTypes from 'prop-types';
//1.- Importamos los componentes para crear el modal
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

// 2.- Estilos para la posicion
function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

//3.- Estilos para la apariencia
const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {
    
    //4.-Configuracion del modal de material-ui
    //4.1.-Usamos useState para que le cargue los estilos al modal
    const [ modalStyle ] = useState(getModalStyle);
    //4.1.- State para abrir o cerrar el modal
    const [open, setOpen] = useState(false);
    //4.3.-Asignamos las clases
    const classes = useStyles();

    //4.4.-Funciones para la apertura y cierre del modal
    //Funcion de apertura
    const handleOpen = () => {
        setOpen(true);
    }
    //Funcion de cierre
    const handleClose = () => {
        setOpen(false);
    }

    //Tomando funcion del context
    const { recetai, setRecetai, setIdreceta } = useContext(ModalContext);

    //Funcion para Muestra y formateo los ingresientes
    const mostrarIngredientes = recetai => {
        let ingredientes = [];
        for (let i = 1; i < 16; i++) {
            //Si NO es null
            if (recetai[`strIngredient${i}`]) {
                ingredientes.push(
                    <li key={i}>{recetai[`strIngredient${i}`]} {recetai[`strMeasure${i}`]}</li>
                )
            }   
        }
        return ingredientes;
    }

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>

                <img src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} className="card-img-top"/>

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            //Guardamos id de receta para la busqueda
                            setIdreceta(receta.idDrink);
                            //Abrimos el modal
                            handleOpen();
                        }
                        }
                    >
                        Ver Receta
                    </button>

                    {/* 5.- Agregando el modal */}
                    <Modal
                        //5.1.-apertura del modal con el valor del state
                        open={open}
                        //5.2.-cierre de modal con la funcion
                        onClose={() => {
                            //devolvemos a null el id
                            setIdreceta(null);
                            // devolvemos receta a blanco
                            setRecetai({});
                            //funcion de cierre 
                            handleClose();
                        }}
                    >
                        {/*6.- BODY DEL MODAL */}
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recetai.strDrink}</h2>
                            <h3>Ingredientes</h3>
                            <p>
                                {recetai.strInstructions}
                            </p>
                            <img src={recetai.strDrinkThumb} alt={recetai.strDrink} className="img-fluid mt-4"/>

                            <h3>Ingredientes y Cantidades</h3>
                            <ul>
                                { mostrarIngredientes(recetai)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

Receta.propTypes = {
    receta: PropTypes.object.isRequired
};

export default Receta;