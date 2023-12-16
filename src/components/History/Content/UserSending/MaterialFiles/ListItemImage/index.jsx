import Image from './Image';
import ListItemHeader from './ListItemHeader';

import style from '../listStyles.module.css';

function ListItemImage(props) {
  return (
    <div className={style.list__item}>
      <ListItemHeader />
      <div className={style.list__content}>
        {!props.image.length
          ? null
          : props.image.map((image) => {
              return <Image key={image.id} image={image} item={image} />;
            })}
        {!props.images.length
          ? null
          : props.images.map((item) => {
              return (
                <Image key={item.group_uid} image={item.files[0]} item={item} />
              );
            })}
      </div>
    </div>
  );
}

export default ListItemImage;
