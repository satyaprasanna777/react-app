import React from 'react';
import GridCell from '../GridCell/gridCell'
class GameField extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { level, cells, onCellClick } = this.props
        return (
            <div>
                {cells.map(eachCell=> <GridCell key={eachCell.id} cell={eachCell} level={level} onCellClick={onCellClick}/>)}
            </div>)
    }
}

export default GameField;
