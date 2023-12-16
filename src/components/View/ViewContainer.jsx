import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { loginGoogle } from '../../redux/ducks/user';
import Auth from '../Auth';
import Register from '../Register';

import style from './style.module.css';

function ViewContainer() {
  const dispatch = useDispatch();

  let params = new URL(document.location).searchParams;
  const tokenSocial = params.get('token');

  useEffect(() => {
    if (tokenSocial) {
      dispatch(loginGoogle(tokenSocial));
    }
  }, [dispatch, tokenSocial]);

  return (
    <div className={style.view}>
      <div className={style.view__container}>
        <div className={style.view__header}>
          <NavLink
            exact
            activeClassName={style.view__active}
            className={style.view__link}
            to="/"
          >
            Вход
          </NavLink>
          <NavLink
            exact
            activeClassName={style.view__active}
            className={style.view__link}
            to="/register"
          >
            Регистрация
          </NavLink>
        </div>
        <div className={style.view__routes}>
          <Route exact path="/" component={Auth} />
          <Route path="/register" component={Register} />
        </div>
      </div>
    </div>
  );
}

export default ViewContainer;
