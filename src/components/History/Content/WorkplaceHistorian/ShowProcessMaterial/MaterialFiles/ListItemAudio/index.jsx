import ListItemHeader from './ListItemHeader';
import Audio from './Audio';

import style from '../listStyles.module.css';

function ListItemAudio(props) {
  return (
    <div className={style.list__item}>
      <ListItemHeader />
      <div className={style.list__content}>
        {props.audios.map((audio) => {
          return <Audio key={audio.id} item={audio} />;
        })}
      </div>
    </div>
  );
}

export default ListItemAudio;
