import ChangeIcons from '../ProcessIcons/ChangeIcons';
import AudioTopIcon from '../../../../../../../Svg/CabinetSvg/AudioIcons/AudioTopIcon';
import AudioBottomIcon from '../../../../../../../Svg/CabinetSvg/AudioIcons/AudioBottomIcon';

import style from '../listStyles.module.css';

function Audio({ item }) {
  return (
    <div className={style.block}>
      <div className={style.item}>
        <div className={style.document}>
          <AudioTopIcon color="#fff" styleName={'materialAudioTop'} />
          <AudioBottomIcon color="#fff" styleName={'materialAudioBottom'} />
        </div>
        <div className={style.icons}>
          <ChangeIcons item={item} />
        </div>
        <div className={!item.processed ? style.error : style.not__error}>
          {!item.processed ? 'Не обработано' : 'Обработано'}
        </div>
      </div>
      <p className={style.name}>{item.title ? item.title : 'Нет названия'}</p>
    </div>
  );
}

export default Audio;
