import { useContext } from 'react';
import { AffiliationContext } from '../../AffiliationContainer/context';
import { EffectContext } from '../effectContext';

import style from './style.module.css';

function AddedBtn() {
  const { master, setMaster, setCheckID } = useContext(EffectContext);
  const { effects, setEffects } = useContext(AffiliationContext);

  const addEffectFile = (effect) => {
    const newEffect = [...effects, effect];
    setEffects(newEffect);
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
