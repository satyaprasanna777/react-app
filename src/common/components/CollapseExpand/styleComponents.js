import styled from '@emotion/styled';

const CollapseExpandContainer=
    styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#cbd5e0;
    padding:20px;
    `;

const ExpandCollapseButtonAndText=
    styled.div`
    display:flex;
    `;

const ToggleButton=
    styled.button`
    background-color:blue;
    color:white;
    padding:2px;
    margin-left:10px;
    border-radius:3px;
    `;

const ListItems=
    styled.div`
    margin-left:150px;
    `;

export {CollapseExpandContainer,ExpandCollapseButtonAndText,ToggleButton,ListItems};