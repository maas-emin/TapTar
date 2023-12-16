import { useDispatch } from 'react-redux';
import {
  openChangeAffiliationFiles,
  openDialogDeleteUserSend,
} from '../../../../../../../redux/ducks/application';
import AudioSvg from './Svg/AudioSvg';
import BasketSvg from './Svg/BasketSvg';
import DocumentSvg from './Svg/DocumentSvg';
import ImageSvg from './Svg/ImageSvg';
import VideoSvg from './Svg/VideoSvg';

import style from '../listStyles.module.css';

function ChangeIcons({ item }) {
  const dispatch = useDispatch();

  const handleChangeOpen = () => {
    dispatch(openChangeAffiliationFiles(item));
  };

  const handleRemoveOpen = () => {
    dispatch(openDialogDeleteUserSend(item));
  };

  let svg = null;

  if (item.type === 'photo') {
    svg = <ImageSvg />;
  }
  if (item.type === 'video') {
    svg = <VideoSvg />;
  }
  if (item.type === 'document') {
    svg = <DocumentSvg />;
  }
  if (item.type === 'audio') {
    svg = <AudioSvg />;
  }

  return (
    <div className={style.icons__inner}>
      <div onClick={handleRemoveOpen} className={style.icon}>
        <BasketSvg />
      </div>
      <div onClick={handleChangeOpen} className={style.icon}>
        {svg}
      </div>
    </div>
  );
}

export default ChangeIcons;
