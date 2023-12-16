import ChangeIcons from '../ProcessIcons';
import AudioBottomIcon from '../../../../../../Svg/CabinetSvg/AudioIcons/AudioBottomIcon';
import AudioTopIcon from '../../../../../../Svg/CabinetSvg/AudioIcons/AudioTopIcon';

import style from '../stylesMedia.module.css';

function Audio({ audio }) {
  return (
    <div className={style.block}>
      <div className={style.item}>
        <div className={style.fileAudio}>
          <AudioTopIcon color="#4686CC" styleName={'cabinetAudioTop'} />
          <AudioBottomIcon color="#4686CC" styleName={'cabinetAudioBottom'} />
        </div>
        <div className={style.icons}>
          <ChangeIcons item={audio} format="audio" />
        </div>
      </div>
      <div className={style.name}>{audio.title}</div>
    </div>
  );
}

export default Audio;
