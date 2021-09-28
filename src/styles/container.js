import styled from 'styled-components';

export const VerticalVerde = styled.div`
    float: left;
    width: 200px;
    height: 100vh;
    background-image: linear-gradient(to bottom, #0047BB, #156DFF);

    @media only screen and (max-width: 868px) {
        float: left;
        width: 100%;
        height: 80px;
    }
`;

export const Container = styled.div`
    float: left;
    width: 824px;
    height: 100vh;
    overflow-x: hidden;
    background-color: #ffffff;

    ::-webkit-scrollbar {
        width: 5px;
    }
    
    ::-webkit-scrollbar-track {
        background: #E5E5E6;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #bbb;
        border-radius: 20px;
        border: 3px solid #bbb;
    }
    
    form {
        display: grid;
        grid-template-rows: 70px 70px 70px;
    }

    .botoes {
        float: left;
        margin-top: 15px;
        width: 100%;
        font-family: 'Roboto';
        font-size: 18px;
        font-weight: bold;
        text-align: right;
        font-stretch: normal;
        font-style: normal;
        color: #333;
        padding-bottom: 10px;
        border-bottom: 1px solid #CCC;
        letter-spacing: 1px;

        span {
            margin-right: 5%;
        }
    }

    .loading {
        float: left;
        width: 100%;
        margin-top: 15%;
        text-align: center;
        font-family: 'Roboto';
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        color: #333;
    }

    .sucesso {
        float: left;
        width: 100%;
        margin-top: 200px;
        text-align: center;
        text-align: center;
        font-family: 'Roboto';
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        color: red;
    }

    @media only screen and (max-width: 868px) {
        float: left;
        width: 100%;
        height: 100vh;
    }
`;