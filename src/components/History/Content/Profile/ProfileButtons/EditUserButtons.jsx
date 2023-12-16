import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { openEditUser } from '../../../../../redux/ducks/application';
import { userLogOut } from '../../../../../redux/ducks/user';
import style from './style.module.css';

function EditUserButtons() {
  const history = useHistory();

  const dispatch = useDispatch();

  const clickOpenEditUser = () => {
    dispatch(openEditUser());
  };

  const handleLogOut = useCallback(() => {
    history.push(`/`);
    return dispatch(userLogOut());
  }, [dispatch, history]);

  return (
    <div className={style.logout}>
      <div className={style.changeBtn} onClick={clickOpenEditUser}>
        Редактировать
      </div>
      <div className={style.logoutBtn} onClick={handleLogOut}>
        Выйти
      </div>
    </div>
  );
}

export default EditUserButtons;
