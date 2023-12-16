import { useDispatch } from 'react-redux';
import { openMaterialFileDialog } from '../../../../../../redux/ducks/showFileCabinet';
import AudioHoverIcon from '../../../../../../Svg/HoverButtonsSvg/MaterialHoverButtons/AudioHoverIcon';
import DocumentHoverIcon from '../../../../../../Svg/HoverButtonsSvg/MaterialHoverButtons/DocumentHoverIcon';
import PhotoHoverIcon from '../../../../../../Svg/HoverButtonsSvg/MaterialHoverButtons/PhotoHoverIcon';
import VideoHoverIcon from '../../../../../../Svg/HoverButtonsSvg/MaterialHoverButtons/VideoHoverIcon';

import style from '../listStyles.module.css';

function ShowIcon({ item }) {
  const dispatch = useDispatch();

  const body = document.querySelector('body');

  const handleOpen = () => {
    body.style.overflow = 'hidden';
    dispatch(openMaterialFileDialog(item));
  };

  let svg = null;
  if (item.type === 'photo') {
    svg = <PhotoHoverIcon style={style} />;
  }
  if (item.type === 'video') {
    svg = <VideoHoverIcon style={style} />;
  }
  if (item.type === 'document') {
    svg = <DocumentHoverIcon style={style} />;
  }
  if (item.type === 'audio') {
    svg = <AudioHoverIcon style={style} />;
  }

  return (
    <div className={style.icons__inner}>
      <div className={style.icon} onClick={handleOpen}>
        {svg}
      </div>
    </div>
  );
}

export default ShowIcon;
