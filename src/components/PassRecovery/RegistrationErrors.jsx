import { useSelector } from 'react-redux';
import style from './style.module.css';

function RegistrationErrors({ clientError }) {
  const message = useSelector((state) => state.user.message);

  return (
    <>
      {message?.name ? (
        <div className={style.error}>{message?.name[0]}</div>
      ) : null}
      {message?.email ? (
        <div className={style.error}>{message?.email[0]}</div>
      ) : null}
      {message?.password ? (
        <div className={style.error}>{message?.password[0]}</div>
      ) : null}
      {clientError ? <div className={style.error}>{clientError}</div> : null}
    </>
  );
}

export default RegistrationErrors;
