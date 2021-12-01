
import {combineReducers, createStore} from 'redux';
import {todolistsReducer} from '../todolists-reducer';

const rootReducer = combineReducers({
    /*tasks: tasksReducer,*/
    todolists: todolistsReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

