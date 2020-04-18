import styled from '@emotion/styled';

let ResultDiv =
    styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    `;

let CongratsMessage =
    styled.div `
    font-size:30px;
    color:green;
    margin-bottom:20px;
    `;

let PlayAgainButton =
    styled.button `
    width:150px;
    height:50px;
    background-color:#1a75ff;
    color:white;
    font-size:20px;
    `;

export { ResultDiv, CongratsMessage, PlayAgainButton };
