import React from 'react';
import { HowToPlayText, HowToPlayInstr, Footer } from '../StylesComponent/stylesComponents.js'
class HowToPlay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { selectedTheme } = this.props
        return (
            <Footer selectedTheme={selectedTheme}>
                <HowToPlayText>How to play?</HowToPlayText>
                <HowToPlayInstr>Get points by clicking on an image but dont click on any image more than once.</HowToPlayInstr>
            </Footer>)
    }
}
export default HowToPlay;
