import styled from '@emotion/styled';
let Counterapp =
    styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    flex-direction:column;
    font-size:25px;
    `;
let Button =
    styled.button `
    background-color:blue;
    color:white;
    height:40px;
    width:50px;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    margin-right:20px;
    `;
let ButtonsAndInput =
    styled.div `
    display:flex;
    `;
let Input =
    styled.input `
    border:1px solid orange;
    width:100px;
    height:40px;
    border-radius:5px;
    text-align:center;
    margin-right:20px;
    `;
export { Counterapp, Button, ButtonsAndInput, Input }
