import styled from 'styled-components';

export const DetalhesCss = styled.div`
    float: left;
    margin-left: 5%;
    width: 90%;
    padding-top: 20px;
    padding-bottom: 10px;
    cursor: pointer;

    .botoes {
        float: left;
        width: 100%;
        font-family: 'Roboto';
        font-size: 12px;
        font-weight: notmal;
        font-stretch: normal;
        font-style: normal;
        color: #333;
        padding-bottom: 10px;
        border-bottom: 1px solid #CCC;
        letter-spacing: 1px;
    }

    .avatar {
        float: left;
        margin-top: 20px;
        width: 160px;
        height: 160px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border: 1px solid #CCC;
        border-radius: 10px;
    }

    .infor {
        float: left;
        margin-top: 20px;
        margin-left: 20px;

        h1 {            
            font-family: 'Roboto';
            font-size: 16px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            color: #333;

            span {
                font-family: 'Roboto';
                font-size: 12px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                color: #CCC;
            }
        }        
    }

    @media only screen and (max-width: 868px) {
        .infor {
            float: left;
            width: 100%;
            margin-top: 20px;
            margin-left: 0px;

        }
    }

`;