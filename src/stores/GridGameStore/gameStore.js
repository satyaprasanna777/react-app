import { observable, action } from 'mobx';
import Model from '../models/GridGameModel/Model'

class GameStore {
    @observable level = 0;
    @observable topLevel = 0;
    @observable currentLevelGridCells = [];
    @observable selectedCellCount = 0;
    @observable isGameCompleted = false;

    @action.bound
    onCellClick(cellId) {
        let selecteCell = this.currentLevelGridCells.find(eachCell => eachCell.id === cellId)
        console.log(selecteCell)
    }

    setGridCells() {
        let randomCells = [];
        let gridSize = this.level + 3;
        let numOfCells = gridSize * gridSize;
        let newCell;

        while (gridSize--) {
            randomCells.push(Math.floor(Math.random() * numOfCells));
        }

        for (let i = 0; i < numOfCells; i++) {
            let cellObject = {
                id: Math.floor(Math.random() * 1000),
                isHidden: (randomCells.indexOf(i) !== -1 ? true : false)
            };
            newCell = new Model(cellObject);
            this.currentLevelGridCells.push(newCell);
        }

        console.log(this.currentLevelGridCells);
    }

    gotoNextLevelAndUpdateCells() {

    }
}

let gameStore = new GameStore();
export default gameStore;
