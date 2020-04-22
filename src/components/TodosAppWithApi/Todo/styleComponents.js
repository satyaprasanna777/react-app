import styled from '@emotion/styled';

let EachTodo =
    styled.div `
    border:1px solid black;
    width:500px;
    height:50px;
    font-size:20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-radius:5px;
    padding:10px;
    `;

let RemoveTodoButton =
    styled.button `
    `;

let TodoCheckBox =
    styled.input `
    width: 30px;
    height: 30px;
    border-radius: 20px;
    border-color: #f5f5f5;
    margin-right:10px;
    `;

let EnteredTodo =
    styled.input `
    text-decoration:${props=>props.disabled?'line-through':null}
    `;

export { EachTodo, RemoveTodoButton, TodoCheckBox, EnteredTodo };
