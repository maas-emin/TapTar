import { useContext } from 'react';
import { AffiliationContext } from '../../AffiliationContainer/context';
import { EffectContext } from '../effectContext';

import style from './style.module.css';

function RemoveBtn() {
  const { master, setMaster, setCheckID } = useContext(EffectContext);
  const { effects, setEffects } = useContext(AffiliationContext);

  const removeEffectFile = (effect) => {
    const filterEffect = effects.filter((item) => item.id !== effect.id);
    setEffects(filterEffect);
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
