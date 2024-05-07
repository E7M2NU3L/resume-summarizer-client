import {proxy} from 'valtio';

const initialState = {
    homePage: true,
    isAdmin: false
}

const store = proxy(initialState);

export default store;