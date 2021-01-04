import styled from "@emotion/styled";

export const Contenedor = styled.div`
    width: 1200px;
    height: 800px;
    margin: 0 auto 0 auto;
    padding-top:40px; 
    background-color: white;
    border-radius: 10px;
`;

export const Form = styled.form`
    width: 1000px;
    margin: 0 auto;
    div{
        display: flex;
        margin-top:20px;
        flex-direction: column;
    }

    div input[type="number"], select{
        outline: none;
        -webkit-appearance: none;
        border: 2px solid #eeeeee;
        padding: 10px;
    }
    label{
        padding: 10px;
        font-weight: bold;
        font-size: 1.3rem;
    }

    input[type="submit"]{
        padding: 10px;
        border: none;
        color: white;
        background-color: rgb(81,194,247);
        font-weight: bold;
        font-size: 1.3rem;
    }
`;