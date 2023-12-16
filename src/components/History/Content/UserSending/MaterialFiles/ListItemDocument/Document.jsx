import React from 'react';
import { useDispatch } from 'react-redux';
import {
  openChangeAffiliationFiles,
  openDialogDeleteUserSend,
  openShowAffiliationFiles,
} from '../../../../../../redux/ducks/application';
import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';
import ChangeSvg from '../ProcessIcons/Svg/ChangeSvg';
import DocumentSvg from '../ProcessIcons/Svg/DocumentSvg';
import DocumentIcon from '../../../../../../Svg/CabinetSvg/DocumentIcon/DocumentIcon';

import style from '../listStyles.module.css';

function Document(props) {
  const dispatch = useDispatch();

  const handleChangeOpen = () => {
    dispatch(openChangeAffiliationFiles(props.item));
  };

  const handleShowOpen = () => {
    dispatch(openShowAffiliationFiles(props.item));
  };

  const handleRemoveOpen = () => {
    dispatch(openDialogDeleteUserSend(props.item));
  };

  return (
    <div className={style.block}>
      <CloseButton
        handleClick={handleRemoveOpen}
        width="20px"
        height="20px"
        top="-4px"
        right="-4px"
        bgColor="#fff"
      />
      {!props.item.group_uid ? null : (
        <>
          <div className={style.itemBgFirst}></div>
          <div className={style.itemBgSecond}></div>
        </>
      )}
      <div className={style.item}>
        <div className={style.document}>
          <DocumentIcon color="#fff" styleName={'materialCard'} />
        </div>
        <div className={style.icons}>
          <div className={style.icons__inner}>
            <div className={style.icon} onClick={handleChangeOpen}>
              <ChangeSvg />
            </div>
            {!props.item.group_uid ? (
              <a
                className={style.icon}
                rel="noreferrer"
                target="_blank"
                href={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${props.item.path}`}
              >
                <DocumentSvg />
              </a>
            ) : (
              <div className={style.icon} onClick={handleShowOpen}>
                <DocumentSvg />
              </div>
            )}
          </div>
        </div>
      </div>
      {!props.item.group_uid ? (
        <p className={style.name}>
          {props.item.title ? props.item.title : 'Нет названия'}
        </p>
      ) : (
        <p className={style.name}>
          {props.item.title ? props.item.title : 'Нет названия'}
        </p>
      )}
    </div>
  );
}

export default Document;
