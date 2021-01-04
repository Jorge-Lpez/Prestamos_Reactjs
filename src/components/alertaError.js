import React from 'react';
import styled from "@emotion/styled";

const Errordiv = styled.div`
    width: 1000px;
    margin: 40px auto;
    text-align: center;
    background-color: #F38482;
    color: white;
`;

const Error = ({mensaje}) => {
    return ( 
        <Errordiv>
            <p>{mensaje}</p>
        </Errordiv>
     );
}
 
export default Error;