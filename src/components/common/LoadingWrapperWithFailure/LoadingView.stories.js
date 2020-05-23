import React from 'react';

import {withKnobs,color, number} from '@storybook/addon-knobs';
import LoadingView from "./LoadingView";

export default{
    component:LoadingView,
    title:'Common/LoadingView'
}

export const defaultView= () => <LoadingView/>

export const withCustomColor= () =>(
<LoadingView fill={color('ColorValue','red')}/>
)

withCustomColor.story={
    decorators:[withKnobs]
}

export const withCustomHeightAndWidth= () =>(
    <LoadingView height={number('Height',50)}
                width={number('Width',50)}/>
)

withCustomHeightAndWidth.story={
    decorators:[withKnobs]
}