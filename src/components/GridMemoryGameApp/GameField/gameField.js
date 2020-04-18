import React from 'react';
import { action, reaction, observable } from 'mobx';
import { observer } from 'mobx-react';
import GridCell from '../GridCell/gridCell';
import { GameArea } from './styleComponent';
import gameStore from '../../../stores/GridGameStore/gameStore';

@observer
class GameField extends React.Component {
    @observable timerId;
    constructor(props) {
        super(props);
    }

    @action.bound
    setTimeForGameField() {
        this.timerId = setTimeout(() => gameStore.resetGame(), 3000 * (gameStore.level + 3));
    }

    addReaction1 = reaction(() => gameStore.currentLevelGridCells, (level, reaction) => {
        clearTimeout(this.timerId);
        this.setTimeForGameField();
    });

    addReaction2 = reaction(() => gameStore.isGameCompleted, (isGameCompleted) => {
        clearTimeout(this.timerId);
    });

    @action.bound
    renderGameField() {
        // this.setTimeForGameField();
        let { level, cells, onCellClick, selectedTheme } = this.props;
        return cells.map(eachCell => <GridCell selectedTheme={selectedTheme} key={eachCell.id} cell={eachCell} level={level} onCellClick={onCellClick}/>);
    }

    render() {
        return (
            <GameArea>
                {this.renderGameField()}
            </GameArea>);
    }
}

export default GameField;
