import styled from '@emotion/styled';
const SizeButtons=
    styled.div`
    display:flex;
    margin-top:0px;
    width:250px;
    flex-wrap:wrap;
    `;

const SizeButton=
    styled.button`
    width:40px;
    height:40px;
    border-radius:50px;
    border:1px solid black;
    margin-right:10px;
    margin-top:15px;
    color:${props=>props.isClicked?"white":"black"};
    background-color:${props=>props.isClicked?"black":"white"};
    `;

const Sizes=
    styled.b`
    margin-top:30px;
    `;

export {SizeButtons,SizeButton,Sizes};