import React from 'react';
import { render } from "@testing-library/react";
import {SignInPage} from '.';

describe("sign in page tests",()=>{
    it("should test typed user name",()=>{
        const userName="test-user";
        const {getByPlaceholderText}=render(
            <SignInPage userName={userName} onChangeUsername={() => {}}/>
        );
        
        const userNameField=getByPlaceholderText('UserName');
        expect(userNameField.value).toBe(userName);
    })

    it("should test typed user password",()=>{
        const password="test-password";
        const {getByPlaceholderText}=render(
            <SignInPage password={password} onChangePassword={() => {}}/>
        );
        
        const passwordField=getByPlaceholderText('Password');
        expect(passwordField.value).toBe(password);
    })

    it("should render given error message", () => {
        const { getByText } = render(
        <SignInPage errorMessage="please enter userName" />
        );
    
        getByText(/please enter userName/i);
    });
})
