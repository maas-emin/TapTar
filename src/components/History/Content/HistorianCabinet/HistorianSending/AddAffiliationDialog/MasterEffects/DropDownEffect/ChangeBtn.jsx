import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { changedEffects } from '../../../../../../../../redux/ducks/userTags';
import { EffectContext } from '../effectContext';

import style from './style.module.css';

function ChangeBtn() {
  const { master, setMaster, setCheckID } = useContext(EffectContext);

  const dispatch = useDispatch();

  const changeEffectFile = (effect) => {
    dispatch(changedEffects(effect));
    setMaster({
      ...master,
      open: false,
    });
    setCheckID(null);
  };

  return (
    <button
      className={style.effectBtn}
      onClick={() => changeEffectFile(master.item)}
    >
      Изменить задачу
    </button>
  );
}

export default ChangeBtn;
