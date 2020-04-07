import React from 'react'
import { NavBar, NavChild, Theme, EmojiGame, Score } from '../StylesComponent/stylesComponents.js'
class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { score, topScore, onChangeTheme, selectedTheme } = this.props
        return (
            <NavBar selectedTheme={selectedTheme}>
                <EmojiGame>Emoji Game</EmojiGame>
                <NavChild>
                    <Score>Score:{score}</Score>
                    <Score>Top Score:{topScore}</Score>
                    <Theme selectedTheme={selectedTheme} onClick={onChangeTheme}>{(selectedTheme==='Light mode')?"DARK THEME":"LIGHT THEME"}</Theme>
                </NavChild>
            </NavBar>)
    }
}
export default Navbar
