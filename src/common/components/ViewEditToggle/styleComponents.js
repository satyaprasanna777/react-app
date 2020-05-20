import styled from '@emotion/styled';

const ViewEditContainer=
    styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#e2e8f0;
    padding:20px;
    `;

const HOCsHeading=
    styled.b`
    font-size:25px;
    display:flex;
    justify-content:center;
    padding:10px;
    `;

const EditButtonAndText=
    styled.div`
    display:flex;
    `;

const EditButton=
    styled.button`
    background-color:blue;
    color:white;
    margin-left:10px;
    padding:2px;
    border-radius:3px
    `;

export {ViewEditContainer,HOCsHeading,EditButtonAndText,EditButton}