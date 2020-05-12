import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";
import AuthApi from "../../services/AuthService/AuthApi";
import { AuthStore } from "../../stores/AuthStore";
import { SignInRoute } from ".";
import getUserSignInResponse from '../../fixtures/getAuthToken.json'

const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
));

describe("SignInRoute Tests", () => {
    let authAPI;
    let authStore;

    beforeEach(() => {
        authAPI = new AuthApi();
        authStore = new AuthStore(authAPI);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it("should render username empty error message", () => {
        const { getByText, getByRole } = render(
        <Router history={createMemoryHistory()}>
            <SignInRoute authStore={authStore} />
        </Router>
        );
        const signInButton = getByRole("button", { name: "SignIn" });
    
        fireEvent.click(signInButton);
    
        getByText(/please enter userName/i);
    });

    it("should render password empty error message", () => {
        const { getByText, getByPlaceholderText, getByRole } = render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore} />
            </Router>
        );
        const userName = "test-user";
        const usernameField = getByPlaceholderText("UserName");
        const signInButton = getByRole("button", { name: "SignIn" });
    
        fireEvent.change(usernameField, { target: { value: userName } });
        fireEvent.click(signInButton);
    
        getByText(/Please enter password/i);
    });

    it("should render signInRoute success state", async () => {
        const history = createMemoryHistory();
        const route = '/sign-in-page';
        history.push(route);
    
        const {
            getByPlaceholderText,
            getByRole,
            queryByRole,
            getByTestId,
            debug
        } = render(
            <Provider authStore={authStore}>
                <Router history={history}>
                    <Route path={'/sign-in-page'}>
                        <SignInRoute />
                    </Route>
                    <Route path={'/online-shopping-app'}>
                        <LocationDisplay />
                    </Route>
                </Router>
            </Provider>
            );

            console.log("hello")
            debug();

            const username = "test-user";
            const password = "test-password";
        
            const usernameField = getByPlaceholderText("UserName");
            const passwordField = getByPlaceholderText("Password");
            const signInButton = getByRole("button", { name: "SignIn" });

            const mockSuccessPromise = new Promise(function(resolve, reject) {
                resolve(getUserSignInResponse);
            });
            const mockSignInAPI = jest.fn();
            mockSignInAPI.mockReturnValue(mockSuccessPromise);
            authAPI.getCookieToken = mockSignInAPI;

            fireEvent.change(usernameField, { target: { value: username } });
            fireEvent.change(passwordField, { target: { value: password } });
            fireEvent.click(signInButton);

            await waitFor(() => {
                expect(
                    queryByRole("button", { name: "SignIn" })
                ).not.toBeInTheDocument();
                expect(getByTestId("location-display")).toHaveTextContent(
                    '/online-shopping-app'
                );
            });
            authStore.userSignOut();
        });

        it("should render signInRoute failure state", async() => {
            const { getByPlaceholderText, getByRole,getByText } = render(
                <Router history={createMemoryHistory()}>
                    <SignInRoute authStore={authStore} />
                </Router>
            );
        
            const userName = "test-user";
            const password = "test-password";

            const usernameField = getByPlaceholderText("UserName");
            const passwordField = getByPlaceholderText("Password");
            const signInButton = getByRole("button", { name: "SignIn" });

            const mockFailurePromise = new Promise(function(resolve, reject) {
                reject(new Error("error"));
            }).catch(() => {});
            const mockSignInAPI = jest.fn();
            mockSignInAPI.mockReturnValue(mockFailurePromise);
            authAPI.getCookieToken = mockSignInAPI;

            fireEvent.change(usernameField, { target: { value: userName } });
            fireEvent.change(passwordField, { target: { value: password } });
            fireEvent.click(signInButton);

            getByText('/online-shopping-app')
            
            await waitFor(() => {
                getByText(/server-error/i);
            });
        });
});
