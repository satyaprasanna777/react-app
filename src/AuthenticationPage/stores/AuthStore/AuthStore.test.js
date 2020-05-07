
import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL
} from "@ib/api-constants";

import AuthApi from "../../services/AuthService/AuthApi";
import getUserSignInResponse from "../../fixtures/getAuthToken.json";

import {AuthStore} from ".";

describe("AuthStore Tests", () => {
    let authAPI;
    let authStore;

    beforeEach(() => {
    authAPI = new AuthApi();
    authStore = new AuthStore(authAPI);
    });

    it("should test initialising auth store", () => {
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
    });

    it("should test userSignInAPI data fetching state", () => {

        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authAPI.getCookieToken = mockSignInAPI;

        authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);
});

it("should test userSignInAPI success state", async () => {

    const mockSuccessPromise = new Promise(function(resolve, reject) {
        resolve(getUserSignInResponse);
    });
    const mockSignInAPI = jest.fn();

    mockSignInAPI.mockReturnValue(mockSuccessPromise);
    authAPI.getCookieToken = mockSignInAPI;
    await authStore.userSignIn();
    expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
    });

    it("should test userSignInAPI failure state", async () => {

        const mockFailurePromise = new Promise(function(resolve, reject) {
            reject(new Error("error"));
        }).catch(() => {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockFailurePromise);
        authAPI.getCookieToken = mockSignInAPI;

        authStore = new AuthStore(authAPI);
        authStore.userSignIn();

        mockFailurePromise.catch(e => {
            expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);
            expect(authStore.getUserSignInAPIError).toBe("error");
        });
        });

        it("should test user sign-out", () => {
            authStore.userSignOut();
            expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
            expect(authStore.getUserSignInAPIError).toBe(null);
        });
        });