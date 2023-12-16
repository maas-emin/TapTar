import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, ChangeError } from '../../redux/ducks/user';
import SocialIcons from './SocialIcons';
import { useHistory } from 'react-router-dom';

import style from './style.module.css';

function Auth() {
  const dispatch = useDispatch();

  const history = useHistory();

  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const message = useSelector((state) => state.user.message);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChange = (e) => {
    if (error) {
      setEmail(e.target.value);
      dispatch(ChangeError());
    } else {
      setEmail(e.target.value);
    }
  };

  const passChange = (e) => {
    if (error) {
      setPassword(e.target.value);
      dispatch(ChangeError());
    } else {
      setPassword(e.target.value);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className={style.auth}>
      {error ? <div className={style.error}>{message}</div> : null}
      <label className={style.authLabel} htmlFor="email">
        E-mail
      </label>
      <input
        className={style.authInput}
        placeholder="Введите e-mail"
        type="email"
        name="email"
        value={email}
        onChange={emailChange}
      />
      <label className={style.authLabel} htmlFor="password">
        Пароль
      </label>
      <input
        className={style.authInput}
        placeholder="1234567"
        type="password"
        name={password}
        value={password}
        onChange={passChange}
      />
      <div
        onClick={() => history.push('/recovery/email')}
        className={style.forgot}
      >
        Забыли пароль?
      </div>
      <SocialIcons />
      <button disabled={loading} onClick={handleClick}>
        Войти
      </button>
    </div>
  );
}

export default Auth;
