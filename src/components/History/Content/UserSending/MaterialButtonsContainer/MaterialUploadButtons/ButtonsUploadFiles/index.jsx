import CloseButton from '../../../../../General/buttons/CloseButton/CloseButton';
import UploadGroup from './UploadGroup';
import UploadOne from './UploadOne';
import { useDispatch } from 'react-redux';
import { closeAmountUploadFiles } from '../../../../../../../redux/ducks/application';

import style from './style.module.css';

function ButtonsUploadFiles(props) {
  const dispatch = useDispatch();

  const body = document.querySelector('body');

  const handleClose = () => {
    body.style.overflow = 'visible';
    dispatch(closeAmountUploadFiles());
  };

  return (
    <div className={style.buttons}>
      <CloseButton
        handleClick={handleClose}
        width="30px"
        height="30px"
        top="-13px"
        right="-10px"
        bgColor="#fff"
      />
      <div className={style.buttons__title}>Выберите тип загрузки</div>

      <div className={style.buttons__block}>
        <UploadOne
          handleTypeOpen={props.handleTypeOpen}
          handleClose={props.handleClose}
          format={props.format}
        />
        <UploadGroup
          handleTagsOpen={props.handleTagsOpen}
          handleClose={props.handleClose}
          format={props.format}
        />
      </div>
    </div>
  );
}

export default ButtonsUploadFiles;
