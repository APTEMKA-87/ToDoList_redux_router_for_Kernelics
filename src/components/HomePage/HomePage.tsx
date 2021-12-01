import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import style from './Home.module.css'
import {AppRootStateType} from '../../state/store';
import {addTodolistAC} from '../../todolists-reducer';

export type FilterValuesType = 'all' | 'active' | 'completed';
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function AppWithRedux() {

    const dispatch = useDispatch();
    const addTodolist = useCallback((title: string) => {
        const action = addTodolistAC(title);
        dispatch(action);
    }, [dispatch]);

    const sumToDo = useSelector<AppRootStateType, number>(state => state.todolists.length)

    return (
        <div className={style.main}>
            <div>Введите имя ToDoList</div>
            <AddItemForm addItem={addTodolist}/>
            <div> Колличество дел={sumToDo} </div>
        </div>
    );
}

export default AppWithRedux;
