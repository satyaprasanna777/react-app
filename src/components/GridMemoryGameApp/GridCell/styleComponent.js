import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const fadeIn = keyframes `
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;


const zoomIn = keyframes `
  0%{transform:scale(0)}
  50%{transform:scale(0.50)}
  100%{transform:scale(1)}
  `;

const zoomOut = keyframes `
  0%{transform:scale(1)}
  50%{transform:scale(0.50)}
  100%{transform:scale(0)}
  `;

let CellButton =
  styled.button `
    width:${props=>300/(props.level+3)}px;
    height:${props=>300/(props.level+3)}px;
    border:${props=>props.selectedTheme==='Light mode'?'4px solid white':'4px solid #2d3748'};
    animation:${props=>(props.shouldShowHiddenCells)?fadeIn:
    (props.isHidden?((props.isHidden&&props.isClickedOnCell===false)?zoomOut:zoomIn):null)} 0.2s linear;
    background-color:
    ${props=>((props.isHidden===false&&props.isClickedOnCell===true))?"red":
    (props.selectedTheme==='Light mode'?((props.shouldShowHiddenCells&&props.isHidden||props.isClickedOnCell)?"green":"#2f4f4f"):((props.shouldShowHiddenCells&&props.isHidden||props.isClickedOnCell)?"#00e6e6":"#006666"))};
    `;

export { CellButton };
