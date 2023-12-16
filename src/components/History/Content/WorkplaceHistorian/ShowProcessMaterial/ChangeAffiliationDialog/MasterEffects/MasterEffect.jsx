import { useState } from 'react';
import HistorianEffectIcons from '../../../../../General/MainEffectIcons';
import { EffectContext } from './effectContext';
import DropDownEffect from './DropDownEffect';

import style from './style.module.css';

function MasterEffect({ item, checkId, setCheckID, checkEffect, effects }) {
  const findComment = effects.find((effect) => effect.id === item.id);

  const [master, setMaster] = useState({
    open: false,
    item: {
      ...item,
      comment: checkEffect ? findComment.comment : item.comment,
    },
  });

  const handleOpenMaster = (item) => {
    if (checkId !== null) {
      return;
    }
    setMaster({
      ...master,
      open: true,
    });
    setCheckID(item.id);
  };

  return (
    <EffectContext.Provider
      value={{
        master,
        setMaster,
        setCheckID,
        checkEffect,
        item,
      }}
    >
      <div className={style.effect} onClick={() => handleOpenMaster(item)}>
        {!master.open ? null : <DropDownEffect />}
        <HistorianEffectIcons title={item.title} check={checkEffect} />
        <div className={style.effectSubtitle}>{item.title}</div>
      </div>
    </EffectContext.Provider>
  );
}

export default MasterEffect;
