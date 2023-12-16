import CloseButton from '../../../General/buttons/CloseButton/CloseButton';
import { useDispatch, useSelector } from 'react-redux';
import { closeShowImage } from '../../../../../redux/ducks/application';
import ChatImage from './ChatImage';

import style from './style.module.css';

function ChatImageMain() {
  const dispatch = useDispatch();

  const showImage = useSelector((state) => state.application.showImage);

  const handleClickClose = () => {
    dispatch(closeShowImage());
  };

  return (
    <div className={style.form__dialog}>
      <CloseButton
        bgColor="initial"
        handleClick={handleClickClose}
        width="35px"
        height="35px"
        top="10px"
        right="13px"
        boxShadow="none"
      />
      <ChatImage path={showImage.path} />
    </div>
  );
}

export default ChatImageMain;
