import React from 'react';

class GridCell extends React.Component {
    render() {
        let { level, cell, onCellClick } = this.props
        return <div onClick={onCellClick}>{cell.id}</div>
    }
}
export default GridCell;
