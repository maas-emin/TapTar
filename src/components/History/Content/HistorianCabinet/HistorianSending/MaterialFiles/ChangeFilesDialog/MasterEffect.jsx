import React, { useState } from 'react';
import CloseButton from '../../../../../General/buttons/CloseButton/CloseButton';

import style from './style.module.css';

function MasterEffect(props) {
  const findComment = props.localEffects.effects.find(
    (item) => item.id === props.effect.id,
  );

  const [master, setMaster] = useState({
    open: false,
    item: {
      ...props.effect,
      comment: props.checkEffect ? findComment.comment : props.effect.comment,
    },
  });

  const handleOpenMaster = (item) => {
    if (props.checkId !== null) {
      return;
    }
    setMaster({
      ...master,
      open: true,
    });
    props.setCheckID(item.id);
  };

  const handleCloseMaster = () => {
    setMaster({
      ...master,
      open: false,
    });
    props.setCheckID(null);
  };

  const handleChangeComment = (e) => {
    setMaster({
      ...master,
      item: {
        ...master.item,
        comment: e.target.value,
      },
    });
  };

  const addEffectFile = (effect) => {
    const newEffect = [...props.localEffects.effects, effect];
    props.setLocalEffects({
      ...props.localEffects,
      effects: newEffect,
    });
    setMaster({
      ...master,
      open: false,
    });
    props.setCheckID(null);
  };

  const removeEffectFile = (effect) => {
    const filterEffect = props.localEffects.effects.filter(
      (item) => item.id !== effect.id,
    );
    props.setLocalEffects({
      ...props.localEffects,
      effects: filterEffect,
    });
    setMaster({
      item: {
        ...master.item,
        comment: '',
      },
      open: false,
    });
    props.setCheckID(null);
  };

  const changeEffectFile = (effect) => {
    const newEffect = props.localEffects.effects.map((item) => {
      if (item.id === effect.id) {
        return {
          ...item,
          comment: effect.comment,
        };
      }
      return item;
    });
    props.setLocalEffects({
      ...props.localEffects,
      effects: newEffect,
    });
    setMaster({
      ...master,
      open: false,
    });
    props.setCheckID(null);
  };

  return (
    <React.Fragment>
      <div
        className={`${style.effect} ${
          props.checkEffect ? style['active'] : ''
        }`}
        onClick={() => handleOpenMaster(props.effect)}
      >
        {!master.open ? null : (
          <div
            className={`${style.effectBlock} ${
              props.checkEffect ? style.active : ''
            }`}
          >
            <CloseButton
              bgColor="#fff"
              handleClick={handleCloseMaster}
              width="25px"
              height="25px"
              top="10px"
              right="10px"
            />
            <div className={style.effectCommentBlock}>
              <div className={style.effectHeader}>
                <div className={style.effectImg}>
                  <img src={props.effect.path_icon} alt="#" />
                </div>
                <div className={style.effectTitle}>{props.effect.title}</div>
              </div>
              <div className={style.effectTextarea}>
                <textarea
                  placeholder="Введите текст..."
                  value={master.item.comment}
                  onChange={handleChangeComment}
                  className={style.effectComment}
                  name="comment"
                  id="comment"
                  rows="7"
                ></textarea>
              </div>
              <div className={style.effectButtons}>
                {!props.checkEffect ? (
                  <button
                    className={style.effectBtn}
                    onClick={() => addEffectFile(master.item)}
                  >
                    Добавить задачу
                  </button>
                ) : (
                  <div className={style.effectButtonsChange}>
                    <button
                      className={style.effectBtn}
                      onClick={() => changeEffectFile(master.item)}
                    >
                      Изменить задачу
                    </button>
                    <button
                      className={style.effectBtn}
                      onClick={() => removeEffectFile(master.item)}
                    >
                      Удалить задачу
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className={style.triangle}>
              <svg
                viewBox="0 0 26 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 23L0.00961679 0.500002L25.9904 0.5L13 23Z"
                  fill="#BED1E6"
                />
              </svg>
            </div>
          </div>
        )}
        <div className={style.effectMainImg}>
          <img src={props.effect.path_icon} alt="#" />
        </div>
        <div className={style.effectSubtitle}>{props.effect.title}</div>
      </div>
    </React.Fragment>
  );
}

export default MasterEffect;
