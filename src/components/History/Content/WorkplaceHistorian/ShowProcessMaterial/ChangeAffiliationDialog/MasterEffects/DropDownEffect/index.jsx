import { useContext } from 'react';
import { EffectContext } from '../effectContext';
import CloseButton from '../../../../../../General/buttons/CloseButton/CloseButton';
import Header from './Header';
import Comment from './Comment';
import AddedBtn from './AddedBtn';
import ChangeBtn from './ChangeBtn';
import RemoveBtn from './RemoveBtn';
import Triangle from './Triangle';

import style from './style.module.css';

function DropDownEffect() {
  const { master, setMaster, setCheckID, checkEffect } =
    useContext(EffectContext);

  const handleCloseMaster = () => {
    setMaster({
      ...master,
      open: false,
    });
    setCheckID(null);
  };

  return (
    <div className={`${style.effectBlock} ${checkEffect ? style.active : ''}`}>
      <CloseButton
        bgColor="#fff"
        handleClick={handleCloseMaster}
        width="25px"
        height="25px"
        top="10px"
        right="10px"
      />
      <div className={style.effectCommentBlock}>
        <Header />
        <Comment />
        <div className={style.effectButtons}>
          {!checkEffect ? (
            <AddedBtn />
          ) : (
            <div className={style.effectButtonsChange}>
              <ChangeBtn />
              <RemoveBtn />
            </div>
          )}
        </div>
      </div>
      <Triangle />
    </div>
  );
}

export default DropDownEffect;
