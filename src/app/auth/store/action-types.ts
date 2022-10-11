export enum ActionTypes {
    REGISTER = '[Auth] Register',
    REGISTER_SUCCESS = '[Auth] Register success',
    REGISTER_FAILURE = '[Auth] Register failure',

    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login success',
    LOGIN_FAILURE = '[Auth] Login failure',

    FETCH_USER = '[Auth] Fetch User',
    FETCH_USER_SUCCESS = '[Auth] Fetch User success',
    FETCH_USER_FAILURE = '[Auth] Fetch User failure',

    LOGOUT = '[Auth] Logout',
    LOGOUT_SUCCESS = '[Auth] Logout success',
    LOGOUT_FAILURE = '[Auth] Logout failure',

    UPDATE_USER = '[Auth] Update User',
    UPDATE_USER_SUCCESS = '[Auth] Update User success',
    UPDATE_USER_FAILURE = '[Auth] Update User failure',
}
