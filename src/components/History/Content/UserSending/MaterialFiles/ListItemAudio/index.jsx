import Audio from './Audio';
import ListItemHeader from './ListItemHeader';

import style from '../listStyles.module.css';

function ListItemAudio(props) {
  return (
    <div className={style.list__item}>
      <ListItemHeader />
      <div className={style.list__content}>
        {!props.audio.length
          ? null
          : props.audio.map((item) => {
              return <Audio key={item.id} audio={item} item={item} />;
            })}
        {!props.audios.length
          ? null
          : props.audios.map((audio) => {
              return (
                <Audio
                  key={audio.group_uid}
                  audio={audio.files[0]}
                  item={audio}
                />
              );
            })}
      </div>
    </div>
  );
}

export default ListItemAudio;
