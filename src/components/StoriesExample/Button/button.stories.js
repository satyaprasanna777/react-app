import React from 'react';
import { action, actions } from '@storybook/addon-actions';
import { Button } from "./button.js";
import { withKnobs, color, number } from "@storybook/addon-knobs";
// import Button from './Button';

export default {
    component: Button,
    title: 'Button',
    decorators:[withKnobs]
};

const eventsFromNames=actions('onClick','onMouseOver');
const eventsFromObjects=actions({onClick:'clicked',onMouseOver:'hovered'});

export const first = () =>(
    <Button {...eventsFromNames}>hai</Button>
)

export const second = () =>(
    <Button {...eventsFromObjects}>hello</Button>
)

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
    <Button onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Button>
);  

text.story = {
    decorators: [storyFn => {
        
        return <div style={{ color: color("color",'red'),backgroundColor: color("color",'green'), border:'1px solid black'}}>{storyFn()}</div>}],
};

emoji.story = {
    decorators : [storyFn => <div style={{backgroundColor:"green"}}>{storyFn()}</div>]
};


// import { linkTo } from '@storybook/addon-links'
// import React from 'react'

// export default {
//     title: 'Button',
// };

// export const first = () => (
//     <button onClick={linkTo('Button', 'second')}>Go to "Second"</button>
// );
// export const second = () => (
//     <button onClick={linkTo('Button', 'first')}>Go to "First"</button>
// );