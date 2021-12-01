import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/to_do_lists">ToDoLists</NavLink>
                <NavLink to="/about">About</NavLink>
            </header>

            <Outlet/>
        </>
    );
};

export default Layout;