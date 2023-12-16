import { useState } from 'react';
import { useSelector } from 'react-redux';
import MasterEffect from './MasterEffect';

import style from './style.module.css';

function MasterEffects(props) {
  const effectsReducer = useSelector((state) => state.tags.effects);

  const [checkId, setCheckID] = useState(null);

  return (
    <div className={style.dialog__effects}>
      {effectsReducer.map((effect) => {
        const checkEffect = props.localEffects.effects.some(
          (item) => item.id === effect.id,
        );
        return (
          <MasterEffect
            key={effect.id}
            effect={effect}
            checkEffect={checkEffect}
            checkId={checkId}
            setCheckID={setCheckID}
            setLocalEffects={props.setLocalEffects}
            localEffects={props.localEffects}
          />
        );
      })}
    </div>
  );
}

export default MasterEffects;
