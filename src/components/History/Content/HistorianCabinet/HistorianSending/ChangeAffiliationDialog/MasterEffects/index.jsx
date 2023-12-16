import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { AffiliationContext } from '../AffiliationContainer/context';
import MasterEffect from './MasterEffect';

import style from './style.module.css';

function MasterEffects() {
  const { effects } = useContext(AffiliationContext);

  const effectsReducer = useSelector((state) => state.tags.effects);

  const [checkId, setCheckID] = useState(null);

  return (
    <div className={style.dialog__effects}>
      {effectsReducer.map((effect) => {
        const checkEffect = effects.some((item) => item.id === effect.id);
        return (
          <MasterEffect
            key={effect.id}
            item={effect}
            effects={effects}
            checkEffect={checkEffect}
            checkId={checkId}
            setCheckID={setCheckID}
          />
        );
      })}
    </div>
  );
}

export default MasterEffects;
