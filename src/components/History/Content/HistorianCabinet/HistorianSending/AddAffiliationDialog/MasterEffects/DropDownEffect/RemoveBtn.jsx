import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { removeEffects } from '../../../../../../../../redux/ducks/userTags';
import { EffectContext } from '../effectContext';

import style from './style.module.css';

function RemoveBtn() {
  const { master, setMaster, setCheckID } = useContext(EffectContext);

  const dispatch = useDispatch();

  const removeEffectFile = (effect) => {
    dispatch(removeEffects(effect.id));
    setMaster({
      item: {
        ...master.item,
        comment: '',
      },
      open: false,
    });
    setCheckID(null);
  };

  return (
    <button
      className={style.effectBtn}
      onClick={() => removeEffectFile(master.item)}
    >
      Удалить задачу
    </button>
  );
}

export default RemoveBtn;
