import Image from './Image';
import ListItemHeader from './ListItemHeader';

import style from '../listStyles.module.css';

function ListItemImage(props) {
  return (
    <div className={style.list__item}>
      <ListItemHeader />
      <div className={style.list__content}>
        {props.images.map((image) => {
          return <Image key={image.id} item={image} />;
        })}
      </div>
    </div>
  );
}

export default ListItemImage;
