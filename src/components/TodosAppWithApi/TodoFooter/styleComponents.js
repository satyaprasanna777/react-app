import styled from '@emotion/styled';

let Footer =
    styled.div `
    display:flex;
    justify-content:space-between;
    width:500px;
    height:50px;
    align-items:center;
    border:1px solid black;
    padding:10px;
    `;

let Button =
    styled.button `
    border:1px solid lightblue;
    padding:5px;
    border-radius:5px;
    `;

let FooterButtons =
    styled.div `
    display:flex;
    width:190px;
    justify-content:space-between;
    `;

export { Footer, Button, FooterButtons };
