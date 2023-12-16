import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addMasterRole,
  deleteMasterRole,
  getMasterRole,
} from '../../../../../redux/ducks/user';
import style from './style.module.css';

function ChangeRoleMaster() {
  const dispatch = useDispatch();

  const master = useSelector((state) => state.user.master);
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (currentUser.role !== 'historian') {
      dispatch(getMasterRole());
    }
  }, [dispatch, master, currentUser.role]);

  const changeRoleMaster = useCallback(() => {
    if (master === false) {
      return dispatch(addMasterRole());
    }
    if (master) {
      return dispatch(deleteMasterRole());
    }
  }, [master, dispatch]);

  return currentUser.role === 'historian' ? null : (
    <div className={style.userCheck}>
      <div className={style.checkTitle}>
        {!master ? 'Стать мастером' : 'Стать мастером'}
      </div>
      <input
        onChange={changeRoleMaster}
        checked={master || ''}
        className={style.input}
        type="checkbox"
        name="switch"
        id="switch"
      />
      <label className={style.label} htmlFor="switch"></label>
    </div>
  );
}

export default ChangeRoleMaster;
