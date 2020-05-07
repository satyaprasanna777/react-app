import React from 'react';
import ReactDOM from 'react-dom';
import {render,cleanup} from '@testing-library/react'

import {HelloWorld} from '.';
import Button from "../button/button";
// import { createRenderer } from "react-dom/test-utils";

afterEach(cleanup)
describe("HelloMessagw tests",()=>{
    it("should render given message",()=>{
        const{getByText,debug}= render(<HelloWorld message="World"/>)
        getByText(/World/i);

        debug();
    })
})

it("renders without crashing",()=>{
    const div=document.createElement("div");
    ReactDOM.render(<Button></Button>,div);
})

it("renders button correctly",()=>{
    const {getByTestId}=render(<Button label="click me please"></Button>);
    expect(getByTestId('button')).toHaveTextContent("click me please");
})

it("renders button correctly",()=>{
    const {getByTestId}=render(<Button label="save"></Button>);
    expect(getByTestId('button')).toHaveTextContent("save");
})

// it("matches snapshot",()=>{
//     const tree=createRenderer(<button label="save"></button>).toJSON();
//     expect(tree).toMatchSnapshot();
// })