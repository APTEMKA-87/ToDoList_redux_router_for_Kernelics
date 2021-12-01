import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './NotFoundPage.module.css'

const NotFoundPage = () => {
    return (
        <div className={style.context}>
            <div>Страница не найдена, ошибка 404</div>
            <NavLink to="">Вернуться на главную</NavLink>
        </div>
    );
};

export default NotFoundPage;