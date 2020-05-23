import React from 'react';
import NoDataView from ".";
import { text } from "../../StoriesExample/Button/button.stories";
import { withKnobs } from "@storybook/addon-knobs";
// import { number, withKnobs } from "@storybook/addon-knobs";

export default{
    component:NoDataView,
    title:'Common/NoDataView',
    decorators:[withKnobs]
}

export const defaultView = () => <NoDataView/>

// export const withChangeTextKnob = () =>(
//     <NoDataView text={text('defaultText','No data found!')} />
// )


