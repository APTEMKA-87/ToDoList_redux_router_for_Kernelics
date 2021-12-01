import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Layout from './Layout';


function App() {

    return <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                {/*<Route path="about" element={<About/>}/>
                <Route path="to_do_lists" element={<ToDoLists/>}/>
                <Route path="*" element={<NotFoundPage/>}/>*/}
            </Route>
        </Routes>
    </>
        ;
}

export default App;
