import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { addedEffects } from '../../../../../../../../redux/ducks/userTags';
import { EffectContext } from '../effectContext';

import style from './style.module.css';

function AddedBtn() {
  const { master, setMaster, setCheckID } = useContext(EffectContext);

  const dispatch = useDispatch();

  const addEffectFile = (effect) => {
    dispatch(addedEffects(effect));
    setMaster({
      ...master,
      open: false,
    });
    setCheckID(null);
  };

  return (
    <button
      className={style.effectBtn}
      onClick={() => addEffectFile(master.item)}
    >
      Добавить задачу
    </button>
  );
}

export default AddedBtn;
