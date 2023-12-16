import { useDispatch } from 'react-redux';
import { getContributionFile } from '../../../../../redux/ducks/showFileCabinet';
import AudioHoverIcon from '../../../../../Svg/HoverButtonsSvg/FIleButtonsSvg/AudioHoverIcon';
import DocumentHoverIcon from '../../../../../Svg/HoverButtonsSvg/FIleButtonsSvg/DocumentHoverIcon';
import PhotoHoverIcon from '../../../../../Svg/HoverButtonsSvg/FIleButtonsSvg/PhotoHoverIcon';
import VideoHoverIcon from '../../../../../Svg/HoverButtonsSvg/FIleButtonsSvg/VideoHoverIcon';

import style from '../stylesMedia.module.css';

function ChangeIcons(props) {
  const dispatch = useDispatch();

  const body = document.querySelector('body');

  const handleChangeOpen = () => {
    body.style.overflow = 'hidden';
    dispatch(getContributionFile(props.item.file_id));
  };

  let svg = null;

  if (props.format === 'photo') {
    svg = <PhotoHoverIcon style={style} />;
  }
  if (props.format === 'video') {
    svg = <VideoHoverIcon style={style} />;
  }
  if (props.format === 'document') {
    svg = <DocumentHoverIcon style={style} />;
  }
  if (props.format === 'audio') {
    svg = <AudioHoverIcon style={style} />;
  }

  return (
    <div className={style.icons__inner}>
      <div onClick={handleChangeOpen} className={style.icon}>
        {svg}
      </div>
    </div>
  );
}

export default ChangeIcons;
