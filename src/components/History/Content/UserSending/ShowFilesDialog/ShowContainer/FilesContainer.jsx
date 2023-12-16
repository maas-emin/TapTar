import ShowFiles from '../ShowFiles';
import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';

import style from './style.module.css';

function FilesContainer({ handleChangeClose }) {
  return (
    <div className={style.form__dialog}>
      <CloseButton
        bgColor="initial"
        handleClick={handleChangeClose}
        width="35px"
        height="35px"
        top="10px"
        right="13px"
        boxShadow="none"
      />
      <ShowFiles />
    </div>
  );
}

export default FilesContainer;
