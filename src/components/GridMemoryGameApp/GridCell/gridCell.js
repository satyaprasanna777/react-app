import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { CellButton } from './styleComponent.js'


@observer
class GridCell extends React.Component {
    @observable shouldShowHiddenCells = true;
    @observable isClickedOnCell = false;

    @action.bound
    componentDidMount() {
        let { level } = this.props;
        setTimeout(() => this.shouldShowHiddenCells = false, 1000 * (level + 3));
    }

    @action.bound
    onCellClick(cell) {
        let { onCellClick } = this.props;
        this.isClickedOnCell = true;

        onCellClick(cell.id)
    }
    render() {
        let { level, cell, selectedTheme } = this.props
        return (
            <CellButton 
                shouldShowHiddenCells={this.shouldShowHiddenCells}
                isClickedOnCell={this.isClickedOnCell}
                isHidden={cell.isHidden}
                level={level} 
                selectedTheme={selectedTheme}
                onClick={()=>this.onCellClick(cell)}
                disabled={this.shouldShowHiddenCells || this.isClickedOnCell}>
            </CellButton>
        );
    }
}
export default GridCell;
