import { useContext } from 'react';
import { AffiliationContext } from '../../AffiliationContainer/context';
import { EffectContext } from '../effectContext';

import style from './style.module.css';

function ChangeBtn() {
  const { master, setMaster, setCheckID } = useContext(EffectContext);
  const { effects, setEffects } = useContext(AffiliationContext);

  const changeEffectFile = (effect) => {
    const newEffect = effects.map((item) => {
      if (item.id === effect.id) {
        return {
          ...item,
          comment: effect.comment,
        };
      }
      return item;
    });
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
      onClick={() => changeEffectFile(master.item)}
    >
      Изменить задачу
    </button>
  );
}

export default ChangeBtn;
