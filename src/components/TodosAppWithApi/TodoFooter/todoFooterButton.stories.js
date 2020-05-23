import React from 'react';
import { text, withKnobs, boolean } from "@storybook/addon-knobs";
import { TodoFooterButton } from ".";
import { action } from "@storybook/addon-actions";

export default{
    component: TodoFooterButton,
    title:'Common/TodoApp/TodoFooter',
    decorators:[withKnobs]
}

export const defaultView = () => <TodoFooterButton/>

export const knobs = () => (
    <TodoFooterButton onClick={action('clicked')} buttonText={text('Text','All')} disabled={boolean('disableStatus',false)}/>
)