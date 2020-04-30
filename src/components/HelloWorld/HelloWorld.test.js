import React from 'react';
import {render} from '@testing-library/react'

import {HelloWorld} from '.';

describe("HelloMessagw tests",()=>{
    it("should render given message",()=>{
        const{getByText,debug}= render(<HelloWorld message="World"/>)
        getByText(/World/i);

        debug();
    })
})