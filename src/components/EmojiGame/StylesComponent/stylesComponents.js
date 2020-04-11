import styled from '@emotion/styled';
import tw from 'tailwind.macro';
let NavBar =
    styled.div `
    ${tw`flex justify-between items-center`};
    padding:20px; 
    background-color:${props=>props.selectedTheme==="Light mode"?"white":"#2d3748"};
    color:${props=>props.selectedTheme==="Light mode"?"black":"white"}`;
let NavChild =
    styled.div `
    ${tw`flex font-bold`}
    `;
let Theme =
    styled.button `
    border:${props=>props.selectedTheme==='Light mode'?'1px solid black':'1px solid white'};
    width:120px; 
    height:35px
    `;
let EmojiGame =
    styled.p `
    font-size:25px;
    font-weight:bold
    `;
let Score =
    styled.p `
    margin-right:20px
    `;
let HowToPlayText =
    styled.p `
    font-size:25px;
    font-weight:bold
    `;
let HowToPlayInstr =
    styled.p `
    font-size:20px;
    margin-left:40px
    `;
let Footer =
    styled.div `
    padding:30px;
    background-color:${props=>props.selectedTheme==='Light mode'?"white":"#2d3748"};
    color:${props=>props.selectedTheme==='Light mode'?"black":"white"}
    `;
let Emojis =
    styled.div `
    background-color:${props=>props.selectedTheme==='Light mode'?"#ebf4ff":"#1a202c"};
    display:flex; 
    flex-wrap:wrap; 
    justify-content:space-between; 
    padding:0px 50px 50px 50px
    `;
let EachEmoji =
    styled.div `
    box-shadow:${props=>props.selectedTheme==='Light mode'?"5px 5px 5px grey":"0 3px 6px #999"};
    color:${props=>props.selectedTheme==='Light mode'?"black":"white"};
    background-color:${props=>props.selectedTheme==='Light mode'?"white":"#2b6cb0"};
    margin-top:70px;
    height:300px
    `;
let EmojiImg =
    styled.img `
    width:250px
    `;
let EmojiName =
    styled.p `
    text-align:center
    `;
let WinStatus =
    styled.div `
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    height:100vh;
    font-size:27px;
    background-color:${props=>props.selectedTheme==='Light mode'?"#ebf4ff":"#1a202c"}
    `;
let PlayAgain =
    styled.button `
    color:white;
    background-color:#1a75ff;
    padding:10px;
    border-radius:5px
    `;
let Loss =
    styled.b `
    color:#b30000
    `;
let Won =
    styled.b `
    color:#248f24
    `;
let DisplaydScore =
    styled.b `
    color:${props=>props.selectedTheme==='Light mode'?"black":"white"};
    `;

export {
    NavBar,
    Theme,
    NavChild,
    EmojiGame,
    Score,
    HowToPlayText,
    HowToPlayInstr,
    Emojis,
    EachEmoji,
    EmojiImg,
    EmojiName,
    Footer,
    WinStatus,
    PlayAgain,
    Loss,
    Won,
    DisplaydScore
};
