import React from 'react';
import { ThemeAndLevel,TopLevel } from './styleComponent'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { level, topLevel, selectedTheme, onChangeTheme } = this.props;
        return (
            <div>
                <TopLevel>Top Level:{level}</TopLevel>
                <ThemeAndLevel>
                    <p>Level:{topLevel}</p>
                    <button onClick={onChangeTheme}>Mode:{selectedTheme==='Light mode'?'Dark':'Light'}</button>
                </ThemeAndLevel>
            </div>);
    }
}

export default Header;
