import styled from 'styled-components';

export const FormCtn = styled.div`
    margin-top: 30%;
    width: 300px;
    place-self: center;
    justify-self: center;

    input {
        width: 290px;
        border: 1px solid #CCC;
        padding: 15px;
        justify-self: center;
    }

    button {
        width: 320px;
        height: 40px;
        background-color: #0047BB;
        border: none;
        font-family: 'Roboto';
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        color: #FFF;
        justify-self: center;
        cursor: pointer;
    }

    @media only screen and (max-width: 868px) {
        width: 290px;

        input {
            width: 256px;
        }
    
        button {
            width: 290px;
        }
    }
`;