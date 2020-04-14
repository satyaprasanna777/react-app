import styled from '@emotion/styled';
let Todos =
    styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;
    `;
let TodoInput =
    styled.input `
    box-shadow:5px 5px 5px red;
    height:50px;
    font-size:25px;
    `;
let Heading =
    styled.p `
    font-size:40px;
    `;

export { Todos, TodoInput, Heading }
