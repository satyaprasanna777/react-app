import React from 'react';
import { EachEmoji, EmojiImg, EmojiName } from '../StylesComponent/stylesComponents.js'
class EmojiCard extends React.Component {
        constructor(props) {
                super(props)
        }
        render() {
                let { eachEmoji, selectedTheme, onEmojiClick } = this.props
                return (
                        <EachEmoji selectedTheme={selectedTheme} onClick={()=>onEmojiClick(eachEmoji)}>
                                <EmojiImg src={eachEmoji.image} alt='loading emoji'/>
                                <EmojiName > { eachEmoji.name } </EmojiName> 
                        </EachEmoji>);
        }
}
export default EmojiCard
