import React from 'react';
import { WinStatus, PlayAgain, Loss, Won, DisplaydScore } from '../StylesComponent/stylesComponents.js'
class WincOrLoss extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { isWon, score, selectedTheme, onPlayAgainClick } = this.props;
        return (
            <WinStatus selectedTheme={selectedTheme}>
                <DisplaydScore selectedTheme={selectedTheme}>{score}</DisplaydScore>
                {isWon==='won'?<Won>You Won!</Won>:<Loss>You Lose!</Loss>}
                <PlayAgain onClick={onPlayAgainClick}>Play Again</PlayAgain>
            </WinStatus>);
    }
}
export default WincOrLoss
