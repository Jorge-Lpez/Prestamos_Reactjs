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
    const [calculando, setCalculando] = useState(false);
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

        const {cantidad, plazo} = datos;
        if( cantidad <= 0 || plazo <= 0){
            setError(true);
            return;
        }

        setError(false);

        setCalculando(false);
        setSpinner(true);
        setTimeout(() => {
            intereses();
            setSpinner(false);
            setCalculando(true);
        }, 3000);
    }

    //Function calcular datos
    const intereses = () => {
        const {cantidad, plazo} = datos;
        switch (plazo) {
            case 1:                
                datos.interes = 0.3;
                datos.quincenas = plazo * 2;
                datos.total = cantidad + (cantidad * 0.3);
                datos.pagos = (cantidad + (cantidad * 0.3)) / (plazo * 2); 
                break;
            case 2:                
                datos.interes = 0.4;
                datos.quincenas = plazo * 2;
                datos.total = cantidad + (cantidad * 0.4);
                datos.pagos = (cantidad + (cantidad * 0.4)) / (plazo * 2); 
                break;
            case 3:                
                datos.interes = 0.5;
                datos.quincenas = plazo * 2;
                datos.total = cantidad + (cantidad * 0.5);
                datos.pagos = (cantidad + (cantidad * 0.5)) / (plazo * 2);  
                break;
            case 4: 
                setDatos({
                    ...datos,
                    interes : 0.6,
                    quincenas : plazo * 2,
                    total : cantidad + (cantidad * 0.6),
                    pagos : (cantidad + (cantidad * 0.6)) / (plazo * 2)  
                });          
                break;
            default:
                break;
        }    
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
            {calculando ? 
                <Resultado 
                    informacion = {datos}
                />   
            :   
                <div className="resultado">
                    <p>Ingresa un monto de prestamo y el tiempo en que deseas pagarlo</p>
                </div>
            }
        </Contenedor>
     );
}
 
export default Formulario;