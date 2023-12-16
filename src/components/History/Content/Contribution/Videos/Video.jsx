import ChangeIcons from '../ProcessIcons';
import ReactPlayer from 'react-player';

import style from '../stylesMedia.module.css';

function Video(props) {
  return (
    <div className={style.block}>
      <div className={style.item}>
        <div className={style.video}>
          <ReactPlayer
            width="100%"
            height="100%"
            url={`${process.env.REACT_APP_TEPTAR_HOST}/storage/${props.video.path_to_file}`}
          />
        </div>
        <div className={style.icons}>
          <ChangeIcons item={props.video} format="video" />
        </div>
      </div>
      <div className={style.name}>{props.video.title}</div>
    </div>
  );
}

export default Video;
