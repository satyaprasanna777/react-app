import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const PagingContainer=
    styled.div`
    display:flex;
    margin-left:auto;
    `;

const PreviousButton=
    styled.button`
    ${tw`flex justify-center text-white w-8 h-8 mr-2`};
    background-color:${props=>props.disabled?"grey":"black"}
    `;

const NextButton=
    styled.button`
    ${tw`flex justify-center text-white w-8 h-8 ml-2`};
    background-color:${props=>props.disabled?"grey":"black"}

    `;

const PageNumber=
    styled.p`
    ${tw`border border-black w-8 h-8 flex justify-center items-center`}
    `;

const TotalNumOfPages=
    styled.p``;

const DivisionSymbol=
    styled.p`
    ${tw`mx-2`}
    `;

export {PagingContainer,PreviousButton,NextButton,PageNumber,TotalNumOfPages,DivisionSymbol}