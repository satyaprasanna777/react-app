import styled from '@emotion/styled/macro'
// import styled from 'styled-components'

// const HoverText = styled.p`
//    color: #000;
//    :hover {
//       color: #ed1212;
//       cursor: pointer;
//    }
// `

const MainContainer = styled.p`
   height: 200px;
   width: 200px;
   background-color: red;
   display: flex;
   color: white;
   justify-content: center;
   align-items: center;
   margin: auto;
   &:hover {
      background-color: blue;
      width: 300px;
      height: 300px;
      transform: scale(1);
      transition-duration: 0.5s;
   }
`

const HoverText = styled.p`
background-color: green;
   /* display: none;
   ${MainContainer}:hover & {
      display: block;
      background-color: green;
   } */
`
export { MainContainer, HoverText }

// ${ImgContainer}:hover & {
//    display: flex !important;
//  }
