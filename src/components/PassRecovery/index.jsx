import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ChangeError, recoveryPassUser } from '../../redux/ducks/user';
import RegistrationErrors from './RegistrationErrors';

import style from './style.module.css';

function PassRecovery() {
  const dispatch = useDispatch();

  const history = useHistory();

  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const [password, setPassword] = useState('');
  const [confirmed, setConfirmed] = useState('');

  const [clientError, setClientError] = useState('');

  let params = new URL(document.location);

  const email = params.searchParams.get('email');
  const token = params.searchParams.get('token');

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
    if (!password) {
      return setClientError('пароль не может быть пустым');
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
    dispatch(recoveryPassUser(password, confirmed, email, token));
  };

  return (
    <div className={style.view}>
      <div className={style.view__container}>
        <div className={style.socialHeader}>
          <div className={style.socialTitle}>Введите новый пароль</div>
        </div>
        <div className={style.registr}>
          {error || clientError ? (
            <RegistrationErrors clientError={clientError} />
          ) : null}
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
          <button disabled={loading} onClick={() => history.push('/')}>
            Назад
          </button>
        </div>
      </div>
    </div>
  );
}

export default PassRecovery;
