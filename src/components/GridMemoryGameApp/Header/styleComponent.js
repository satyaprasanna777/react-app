import styled from '@emotion/styled';

let ThemeAndLevel =
    styled.div `
    display:flex;
    justify-content:space-between;
    width:300px;
    margin-bottom:20px;
    `;

let TopLevel =
    styled.p `
    text-align:center;
    margin-bottom:30px;
    `;

let ThemeButton =
    styled.button `
    border:${props=>props.selectedTheme==="Light mode"? "1px solid black":"1px solid white"};
    width:100px;
    height:30px;
    `;

export { ThemeAndLevel, TopLevel, ThemeButton };
