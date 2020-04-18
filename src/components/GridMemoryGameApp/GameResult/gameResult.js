import React from 'react';
import { ResultDiv, CongratsMessage, PlayAgainButton } from './styleComponent.js';

class GameResult extends React.Component {
    render() {
        let { onPlayAgainClick } = this.props;
        return (
            <ResultDiv>
                <CongratsMessage>Congratulations!</CongratsMessage>
                <PlayAgainButton onClick={onPlayAgainClick}>Play Again!</PlayAgainButton>
            </ResultDiv>);
    }
}

export default GameResult;
