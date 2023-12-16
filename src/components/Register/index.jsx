import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registration, ChangeError } from '../../redux/ducks/user';
import RegistrationErrors from './RegistrationErrors';

import style from './style.module.css';

function Register() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmed, setConfirmed] = useState('');

  const [clientError, setClientError] = useState('');

  const emailChange = (e) => {
    if (error) {
      setEmail(e.target.value);
      dispatch(ChangeError());
      setClientError('');
    } else {
      setEmail(e.target.value);
      setClientError('');
    }
  };
  const nameChange = (e) => {
    if (error) {
      setName(e.target.value);
      dispatch(ChangeError());
      setClientError('');
    } else {
      setName(e.target.value);
      setClientError('');
    }
  };
  const passwordChange = (e) => {
    if (error) {
      setPassword(e.target.value);
      dispatch(ChangeError());
      setClientError('');
    } else {
      setPassword(e.target.value);
      setClientError('');
    }
  };
  const confirmedChange = (e) => {
    if (error) {
      setConfirmed(e.target.value);
      dispatch(ChangeError());
      setClientError('');
    } else {
      setConfirmed(e.target.value);
      setClientError('');
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!name) {
      return setClientError('Имя не может быть пустым');
    }
    if (name.length < 3) {
      return setClientError('В имени не может быть меньше 3 символов');
    }
    if (!email) {
      return setClientError('Не может быть пустым');
    }
    if (!re.test(String(email).toLowerCase())) {
      return setClientError('Некорректные данные email');
    }
    if (!password) {
      return setClientError('Не может быть пустым');
    }
    if (password !== confirmed) {
      return setClientError('Неверный пароль');
    }
    if (password.length < 6) {
      return setClientError('минимум 6 символов');
    }
    if (password.length !== 0 && /\s/.test(password)) {
      return setClientError('В пароле не может быть пробелов');
    }
    dispatch(registration(name, email, password, confirmed));
  };

  return (
    <div className={style.registr}>
      {error || clientError ? (
        <RegistrationErrors clientError={clientError} />
      ) : null}
      <label className={style.registrLabel} htmlFor="username">
        Логин
      </label>
      <input
        autoComplete="off"
        className={style.registrInput}
        placeholder="Введите логин"
        type="name"
        name="name"
        value={name}
        onChange={nameChange}
      />
      <label className={style.registrLabel} htmlFor="email">
        E-mail
      </label>
      <input
        autoComplete="off"
        className={style.registrInput}
        placeholder="taptar@mail.ru"
        type="email"
        name="email"
        value={email}
        onChange={emailChange}
      />
      <label className={style.registrLabel} htmlFor="password">
        Пароль
      </label>
      <input
        autoComplete="off"
        className={style.registrInput}
        placeholder="1234567"
        type="password"
        name={password}
        value={password}
        onChange={passwordChange}
      />
      <label className={style.registrLabel} htmlFor="confirmed">
        Подтверждение пароля
      </label>
      <input
        autoComplete="off"
        className={style.registrInput}
        placeholder="1234567"
        type="password"
        name={confirmed}
        value={confirmed}
        onChange={confirmedChange}
      />
      <button disabled={loading} onClick={handleClick}>
        Войти
      </button>
    </div>
  );
}

export default Register;
