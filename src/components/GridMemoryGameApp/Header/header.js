import React from 'react';
import { observer } from 'mobx-react'
import { ThemeAndLevel, TopLevel, ThemeButton } from './styleComponent'

@observer
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { level, topLevel, selectedTheme, onChangeTheme } = this.props;
        return (
            <div>
                <TopLevel>Top Level:{topLevel}</TopLevel>
                <ThemeAndLevel>
                    <p>Level:{level}</p>
                    <ThemeButton selectedTheme={selectedTheme} onClick={onChangeTheme}>Mode:{selectedTheme==='Light mode'?'Dark':'Light'}</ThemeButton>
                </ThemeAndLevel>
            </div>);
    }
}

export default Header;
