import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EachProduct=
    styled.div`
    ${tw`flex flex-col border border-transparent border-solid m-2 items-center p-2 relative`};
    width:200px;
    `;

const AddToCart=
    styled.button`
    ${tw`w-full py-3 text-white bg-black text-center rounded text-sm focus:outline-none`}
    `;

const ProductImage=
    styled.img`
    ${tw`w-4/5 object-contain mb-2`};
    `;

const Title=
    styled.p`
    ${tw`text-center`};
    height:45px;
    `;

const Price=
    styled.p`
    ${tw`text-x1`}
    `;

const CurrencyFormat=
    styled.span`
    ${tw`text-xs mr-1`}
    `;

const Installements=
    styled.p`
    ${tw`text-sm mb-4 h-5`};
    color:grey;
    `;

const YellowBar=
    styled.div`
    ${tw`w-4 border-t-2 rounded border-yellow-600 mt-2px mb-4`};
    `;

const FreeShipping=
    styled.p`
    ${tw`absolute top-10 right-0 bg-black p-1 text-xs text-white`};
    `;

export {EachProduct,AddToCart,ProductImage,Title,Price,CurrencyFormat,Installements,YellowBar,FreeShipping};