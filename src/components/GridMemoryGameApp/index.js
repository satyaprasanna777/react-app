import React from 'react';
import { observer } from 'mobx-react';
// import { action, reaction,observable } from 'mobx';
import Header from './Header/header';
import GameField from './GameField/gameField';
import { GridGame } from './styleComponent';
import gameStore from '../../stores/GridGameStore/gameStore';
import GameResult from './GameResult/gameResult';

@observer
class GridMemoryGameApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { selectedTheme, onChangeTheme } = this.props;
        return (
            <GridGame selectedTheme={selectedTheme}>
                <Header level={gameStore.level} 
                        topLevel={gameStore.topLevel} 
                        selectedTheme={selectedTheme}
                        onChangeTheme={onChangeTheme}
                />
                {gameStore.isGameCompleted===false?
                <GameField selectedTheme={selectedTheme} 
                        cells={gameStore.currentLevelGridCells} 
                        level={gameStore.level} 
                        onCellClick={gameStore.onCellClick}
                />:
                <GameResult onPlayAgainClick={gameStore.onPlayAgainClick}/>}
            </GridGame>);
    }
}

export default GridMemoryGameApp;
