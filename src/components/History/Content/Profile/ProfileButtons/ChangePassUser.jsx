import { useDispatch } from 'react-redux';
import { openEditUserPass } from '../../../../../redux/ducks/application';

import style from './style.module.css';

function ChangePassUser() {
  const dispatch = useDispatch();

  const pressOpenEditUserPass = () => {
    dispatch(openEditUserPass());
  };

  return (
    <div className={style.changePass}>
      <div className={style.changeBtnPass} onClick={pressOpenEditUserPass}>
        Сменить существующий пароль
      </div>
    </div>
  );
}

export default ChangePassUser;
