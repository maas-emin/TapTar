import { useDispatch, useSelector } from 'react-redux';
import { changeUserProfile } from '../../../../../redux/ducks/user';

import style from './style.module.css';

export default function SaveButton({ currentUserName, currentUserEmail }) {
  const dispatch = useDispatch();

  const editUser = useSelector((state) => state.application.editUser);

  const changeCurrentUserProfile = () => {
    dispatch(changeUserProfile(currentUserName, currentUserEmail));
  };

  return !editUser ? null : (
    <div onClick={changeCurrentUserProfile} className={style.saveBtn}>
      Сохранить изменения
    </div>
  );
}
