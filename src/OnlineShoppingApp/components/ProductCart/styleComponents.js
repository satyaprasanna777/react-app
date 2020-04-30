import styled from '@emotion/styled';

const CartArea=
    styled.div`
    width:400px;
    height:100vh;
    background-color:black;
    color:white;
    overflow:auto;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    `;

const AddProductsMessage=
    styled.p`
    text-align:center;
    `;

const SubTotalAndCLearCheckOut=
    styled.div`
    display:flex;
    flex-direction:column;
    `;

export {CartArea,AddProductsMessage,SubTotalAndCLearCheckOut};