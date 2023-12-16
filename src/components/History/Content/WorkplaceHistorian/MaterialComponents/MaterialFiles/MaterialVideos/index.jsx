import ListItemHeader from './ListItemHeader';
import Video from './Video';

import style from '../listStyles.module.css';

function MaterialVideos(props) {
  return (
    <div className={style.list__item}>
      <ListItemHeader />
      <div className={style.list__content}>
        {props.videos.map((video) => {
          return <Video key={video.id} item={video} />;
        })}
      </div>
    </div>
  );
}

export default MaterialVideos;
