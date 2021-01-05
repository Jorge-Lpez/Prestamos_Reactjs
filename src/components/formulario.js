import React, { useState } from 'react';
import Resultado from "./resultado";
import Error from "./alertaError";
import Spinner from "./spinner";
import { Contenedor, Form } from "./estilos";

const Formulario = () => {

    //Creando state para datosFormulario
    const [datos, setDatos] = useState({
        cantidad: 0,
        plazo: 0
    });

    const [error, setError] = useState(false);
    const [spinner, setSpinner] = useState(false);

    //Llenar set datos
    const llenarDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value === "" ? 0 : parseInt(e.target.value)
        });
    }
    

    //Boton calcular
    const onSubmitCalcular = e => {
        e.preventDefault();

        setDatos({
            ...datos,
            total : 0
        });
        
        const {cantidad, plazo} = datos;
        if( cantidad <= 0 || plazo <= 0){
            setError(true);
            return;
        }

        setError(false);
        setSpinner(true);

        setTimeout(() => {
            intereses();
            setSpinner(false);
        }, 3000);
    }

    const intereses = () => {
        const {cantidad, plazo} = datos;
        let interes;
        let partesPagos = 2;
        switch (plazo) {
            case 1:                
                interes = 0.15;
                break;
            case 2:                
                interes = 0.20;
                break;
            case 3:                
                interes = 0.25;
                break;
            case 4: 
                interes = 0.30;
                break;
            default:
                break;
        }    

        setDatos({
            ...datos,
            interes,
            quincenas : plazo * partesPagos,
            total: cantidad + ( cantidad * interes),
            pagos: ((cantidad + ( cantidad * interes)) / (plazo * partesPagos)).toFixed(2)
        });
    }

    return ( 
        <Contenedor>
            <Form onSubmit={onSubmitCalcular}>
                {error && <Error mensaje="Todos los campos son obligatorios"/>}
                <div className="items-formulario">
                    <label htmlFor="cantidad">Prestamo a solicitar:</label>
                    <input type="number" name="cantidad" id="cantidad" onChange={llenarDatos}/>
                </div>
                <div className="items-formulario">
                    <label htmlFor="plazo">Plazo a pagarlo: </label>
                    <select name="plazo" id="plazo" onChange={llenarDatos}>
                        <option value="0">Seleccionar:</option>
                        <option value="1">Un mes</option>
                        <option value="2">Dos meses</option>
                        <option value="3">Tres meses</option>
                        <option value="4">Cuatro meses</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Calcular"/>
                </div>
            </Form>
            {spinner && <Spinner/>}

            { datos.total > 0 ? 
                <Resultado 
                    informacion = {datos}
                />   
            :   
                datos.total === 0 ? null :
                    <div className="resultado">
                        <p>Ingresa un monto de prestamo y el tiempo en que deseas pagarlo</p>
                    </div>

            }

        </Contenedor>
     );
}
 
export default Formulario;