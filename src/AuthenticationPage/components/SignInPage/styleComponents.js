import styled from '@emotion/styled';

let SignInPageContainer=
    styled.div`
    display:flex;
    flex-direction:column;
    height:200px;
    width:200px;
    justify-content:center;
    border:1px solid black;
    padding:20px;
    margin:150px auto auto auto;
    `;

let Heading=
    styled.b`
    margin-bottom:10px;
    `;

let UserName=
    styled.input`
    border:1px solid grey;
    border-radius:5px;
    margin-bottom:10px;
    height:50px;
    `;

let Password=
    styled.input`
    border:1px solid grey;
    border-radius:5px;
    margin-bottom:10px;
    height:50px;
    `;

let SignInButton=
    styled.button`
    text-align:center;
    background-color:black;
    color:white;
    border-radius:5px;
    height:50px;
    `;

let ErrorMessage=
    styled.span`
    color:red;
    font-size:13px;
    `;

export {SignInPageContainer,Heading,UserName,Password,SignInButton,ErrorMessage}