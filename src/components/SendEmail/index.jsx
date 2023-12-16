import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ChangeError, getPasswordReset } from '../../redux/ducks/user';
import RegistrationErrors from './RegistrationErrors';

import style from './style.module.css';

function SendEmail() {
  const dispatch = useDispatch();

  const history = useHistory();

  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const message = useSelector((state) => state.user.message);

  const [email, setEmail] = useState('');

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

  const handleClick = (e) => {
    e.preventDefault();
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
      return setClientError('email не может быть пустым');
    }
    if (!re.test(String(email).toLowerCase())) {
      return setClientError('Некорректные данные email');
    }
    dispatch(getPasswordReset(email));
  };

  return (
    <div className={style.view}>
      <div className={style.view__container}>
        <div className={style.socialHeader}>
          <div className={style.socialTitle}>Введите Email</div>
        </div>
        <div className={style.registr}>
          {error || clientError ? (
            <RegistrationErrors clientError={clientError} />
          ) : null}
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
          <button disabled={loading} onClick={handleClick}>
            Войти
          </button>
          <button disabled={loading} onClick={() => history.push('/')}>
            Назад
          </button>
          {message.length ? <div>{message}</div> : null}
        </div>
      </div>
    </div>
  );
}

export default SendEmail;
