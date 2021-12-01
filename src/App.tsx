import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Layout from './Layout';
import About from './components/About/About';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import ToDoLists from './components/ToDoLists/ToDoLists';


function App() {

    return <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="to_do_lists" element={<ToDoLists/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    </>
        ;
}

export default App;
