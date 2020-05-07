import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const CartContainer=styled.div`${tw`flex`};height:40px;width:400px;`
const CloseCart=styled.button`${tw`text-2xl `};color:red;background-color:black;border:1px solid black`
const DisplayCart=styled.div`${tw`h-screen`} width:${props=>props.shouldDisplayCart?"400px":"0px"};background-color:black;border:1px solid black`
let CartArea=styled.div`
    display:flex;
    
    flex-direction:column;
    justify-content:space-between;`
const Cart=styled.button`${tw`fixed right-0 `}`
// const CartArea=
//     styled.div`
//     width:400px;
//     height:100vh;
//     background-color:black;
//     color:white;
//     overflow:auto;
//     display:flex;
//     flex-direction:column;
//     justify-content:space-between;
  //  `;

const AddProductsMessage=
    styled.p`
    text-align:center;
    `;

const SubTotalAndCLearCheckOut=
    styled.div`
    display:flex;
    flex-direction:column;
    `;

export {AddProductsMessage,SubTotalAndCLearCheckOut,CartContainer,CloseCart,DisplayCart,CartArea,Cart};