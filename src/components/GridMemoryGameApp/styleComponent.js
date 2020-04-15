import styled from '@emotion/styled';

let GridGame =
    styled.div `
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    background-color:${props=>props.selectedTheme==="Light mode"?"white":"#2d3748"};
    color:${props=>props.selectedTheme==="Light mode"?"black":"white"}
    `;

export { GridGame };
