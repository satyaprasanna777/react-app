import React from 'react';
import { observable } from 'mobx';
import Header from './Header/header'
import GameField from './GameField/gameField'
import { GridGame } from './styleComponent'
import gameStore from '../../stores/GridGameStore/gameStore'

class GridMemoryGameApp extends React.Component {
    @observable level = 0;
    @observable topLevel = 0;
    constructor(props) {
        super(props);
        gameStore.setGridCells();
    }

    render() {
        let { selectedTheme, onChangeTheme } = this.props;
        return (
            <GridGame selectedTheme={selectedTheme}>
                <Header level={this.level} 
                        topLevel={this.topLevel} 
                        selectedTheme={selectedTheme}
                        onChangeTheme={onChangeTheme}/>
                <GameField cells={gameStore.currentLevelGridCells} level={gameStore.level} onCellClick={gameStore.onCellClick}/>
            </GridGame>);
    }
}

export default GridMemoryGameApp;
