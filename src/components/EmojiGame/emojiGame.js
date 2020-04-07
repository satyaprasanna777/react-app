import React from 'react';
import Navbar from './Navbar/navbar.js';
import HowToPlay from './HowToPlay/howToPlay.js';
import EmojiCard from './EmojiCard/emojiCard.js';
import WinOrLoss from './WinOrLoss/winOrLoss.js';
import { Emojis } from './StylesComponent/stylesComponents.js';
class EmojiGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emojis: [{ id: 0, isClicked: false, name: 'Exploding Head', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png' },
                { id: 1, isClicked: false, name: 'Grinning Face With Sweat', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png' },
                { id: 2, isClicked: false, name: 'Smiling Face With Heart-Eyes', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png' },
                { id: 3, isClicked: false, name: 'Smirking Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png' },
                { id: 4, isClicked: false, name: 'Thinking Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png' },
                { id: 5, isClicked: false, name: 'Winking Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png' },
                { id: 6, isClicked: false, name: 'Grinning Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png' },
                { id: 7, isClicked: false, name: 'Crying Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png' },
                { id: 8, isClicked: false, name: 'Astonished Face', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png' },
                { id: 9, isClicked: false, name: 'Face With Tears Of Joy', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png' },
                { id: 10, isClicked: false, name: 'Star Struck', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png' },
                { id: 11, isClicked: false, name: 'Winking Face With Tongue', image: 'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png' }
            ],
            score: 0,
            topScore: 0,
            gameState: 'playing'
        };
    }
    onEmojiClick = (emoji) => {
        if (emoji.isClicked === false) {
            this.shuffleEmojis(emoji);
            this.incrementScore();
        }
        else
            this.setState({ gameState: 'loss' });
    }
    shuffleEmojis = (emoji) => {
        let { emojis } = this.state;
        let dupEmojis = emojis.slice(0);
        let emojiIndex = emojis.indexOf(emoji);
        dupEmojis[emojiIndex].isClicked = true;
        dupEmojis.sort(() => 0.5 - Math.random());
        this.setState({ emojis: dupEmojis });
    }
    incrementScore = () => {
        let { score, emojis } = this.state;
        this.setState({ score: ++score });
        if (score === emojis.length)
            this.setState({ gameState: 'won' });
    }
    onPlayAgainClick = () => {
        this.setTopScore();
        this.resetGame();
    }
    resetGame = () => {
        let { emojis } = this.state;
        let dupEmojis = emojis.slice(0);
        dupEmojis.map(eachEmoji => eachEmoji.isClicked = false);
        this.setState({ score: 0, gameState: 'playing', emojis: dupEmojis });
    }
    setTopScore = () => {
        let { score, topScore } = this.state;
        if (score > topScore)
            this.setState({ topScore: score });
    }
    render() {
        let { score, topScore, emojis, gameState } = this.state;
        let { selectedTheme, onChangeTheme } = this.props;
        return (
            <div>
                <Navbar score={score} topScore={topScore} selectedTheme={selectedTheme} onChangeTheme={onChangeTheme}/>
                {gameState==='playing'?
                <Emojis selectedTheme={selectedTheme}>
                    {emojis.map((eachEmoji,index)=><EmojiCard key={index} eachEmoji={eachEmoji} selectedTheme={selectedTheme} onEmojiClick={this.onEmojiClick}/>)}
                </Emojis>:
                <WinOrLoss score={score} onPlayAgainClick={this.onPlayAgainClick} isWon={gameState} selectedTheme={selectedTheme}/>}
                <HowToPlay selectedTheme={selectedTheme}/>
            </div>);
    }
}
export default EmojiGame;
