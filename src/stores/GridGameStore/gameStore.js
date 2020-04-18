import { observable, action, reaction } from 'mobx';
import Model from '../models/GridGameModel/Model';

class GameStore {
    @observable level;
    @observable topLevel;
    @observable currentLevelGridCells;
    @observable selectedCellCount;
    @observable isGameCompleted;

    constructor() {
        this.level = 0;
        this.topLevel = 0;
        this.currentLevelGridCells = [];
        this.selectedCellCount = 0;
        this.isGameCompleted = false;
        this.setGridCells();
    }

    @action.bound
    onCellClick(cellId) {
        let selectedCell = this.currentLevelGridCells.find(eachCell => eachCell.id === cellId);

        if (selectedCell.isHidden)
            this.incrementSelectedCellsCount();
        else
            setTimeout(() => this.resetGame(), 300);
    }

    @action.bound
    incrementSelectedCellsCount() {
        let gridSize = this.level + 3;
        this.selectedCellCount++;

        if (this.selectedCellCount === gridSize) {
            if (this.level < 1)
                setTimeout(() => this.goToNextLevelAndUpdateCells(), 300);
            else
                setTimeout(() => this.isGameCompleted = true, 300);
        }
    }

    @action.bound
    goToNextLevelAndUpdateCells() {
        this.level++;
        this.resetSelectedCellsCount();
        this.setGridCells();
    }

    @action.bound
    resetGame() {
        this.resetSelectedCellsCount();
        this.goToInitialLevelAndUpdateCells();
    }

    @action.bound
    onPlayAgainClick() {
        this.resetGame();
    }

    @action.bound
    resetSelectedCellsCount() {
        this.selectedCellCount = 0;
    }

    @action.bound
    goToInitialLevelAndUpdateCells() {
        if (this.topLevel < this.level) {
            this.topLevel = this.level;
        }
        this.level = 0;
        this.isGameCompleted = false;
        this.setGridCells();
    }

    @action.bound
    setGridCells() {
        this.currentLevelGridCells = [];
        let randomCells = [];
        let gridSize = this.level + 3;
        let numOfCells = gridSize * gridSize;
        let newCell;

        while (gridSize) {
            let randomCell = Math.floor(Math.random() * numOfCells);
            if (randomCells.indexOf(randomCell) === -1) {
                randomCells.push(randomCell);
                gridSize--;
            }
        }

        for (let i = 0; i < numOfCells; i++) {
            let cellObject = {
                id: Math.floor((Math.random() * (i + 1)) * 10000),
                isHidden: (randomCells.indexOf(i) !== -1 ? true : false)
            };
            newCell = new Model(cellObject);
            this.currentLevelGridCells.push(newCell);
        }
    }
}

let gameStore = new GameStore();
export default gameStore;
