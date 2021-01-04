import React from 'react';

const Resultado = ({informacion}) => {
    const {cantidad, interes, plazo, quincenas, total, pagos} = informacion;
    return ( 
        <div className="resultado">
            <p>Solicito un prestamo de: ${cantidad}</p>
            <p>Que tiene un interes del: {interes}%</p>
            <p>Que se solicito a {plazo} meses</p>
            <p>Que se pagara en {quincenas} quincenas con un pago de ${pagos} pesos</p>
            <p>Hasta pagar el total de ${total}</p>
        </div>
     );
}
 
export default Resultado;