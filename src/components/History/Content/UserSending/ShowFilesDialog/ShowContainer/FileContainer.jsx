import ShowFile from '../ShowFile';
import CloseButton from '../../../../General/buttons/CloseButton/CloseButton';
import { useSelector } from 'react-redux';

import style from './style.module.css';

function FileContainer({ handleChangeClose }) {
  const file = useSelector((state) => state.application.showFiles.files);

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
      <ShowFile file={file} />
    </div>
  );
}

export default FileContainer;
