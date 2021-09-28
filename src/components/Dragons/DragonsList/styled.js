import styled from 'styled-components';

export const ListViews = styled.div`
    float: left;
    margin-left: 5%;
    width: 90%;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    border-bottom: 1px solid #CCC;

    .header {
        float: left;
        width: 100%;        
    }

    .avatar {
        float: left;
        width: 50px;
        height: 50px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        border: 1px solid #CCC;
        border-radius: 50%;
    }

    h1 {
        float: left;
        margin-top: 18px;
        margin-left: 10px;
        font-family: 'Roboto';
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        color: #333;
    }

    .exc {
        float: right;
        margin-top: 18px;
        font-family: 'Roboto';
        font-size: 12px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        color: red;
    }
`;