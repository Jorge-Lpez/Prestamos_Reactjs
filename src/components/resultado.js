import React from 'react';
import styled from "@emotion/styled";

const ResPrestamo = styled.div`
    margin-top: 20px;
    border: 2px solid  rgba(66,138,246);
`;

const Resultado = ({informacion}) => {
    const {cantidad, interes, plazo, quincenas, total, pagos} = informacion;
    return ( 
        <ResPrestamo className="resultado">
            <p>Solicito un prestamo de: ${cantidad}</p>
            <p>Que tiene un interes del: {interes}%</p>
            <p>Que se solicito a {plazo} meses</p>
            <p>Que se pagara en {quincenas} quincenas con un pago de ${pagos} pesos</p>
            <p>Hasta pagar el total de ${total}</p>
        </ResPrestamo>
     );
}
 
export default Resultado;