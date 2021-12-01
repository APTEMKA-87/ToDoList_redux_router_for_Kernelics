import {combineReducers, createStore} from 'redux';
import {todolistsReducer} from '../todolists-reducer';

const rootReducer = combineReducers({
    todolists: todolistsReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

