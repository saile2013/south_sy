import styled from 'styled-components';

export const Container = styled.div`
    float: left;
    width: 824px;
    height: 100vh;
    background-color: #ffffff;
    
    form {
        display: grid;
        grid-template-rows: 70px 70px 70px 70px 70px;
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
        margin-top: 130px;
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