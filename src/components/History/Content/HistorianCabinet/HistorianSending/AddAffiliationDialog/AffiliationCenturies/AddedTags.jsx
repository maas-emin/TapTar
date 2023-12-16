import { useDispatch, useSelector } from 'react-redux';
import { removeCenturies } from '../../../../../../../redux/ducks/userTags';
import AddedTagsItem from '../misk/AddedTagsItem';

import style from './style.module.css';

function AddedTags() {
  const dispatch = useDispatch();

  const centuriesClient = useSelector((state) => state.userTags.tags_century);

  const handleRemoveCenturiesClick = (id) => {
    return dispatch(removeCenturies(id));
  };

  return (
    <div className={style.tags__container}>
      <div className={style.tags__subTitle}>Добавленные:</div>
      <div className={style.tags__items}>
        {!centuriesClient
          ? null
          : centuriesClient.map((item) => {
              return (
                <AddedTagsItem
                  key={item.id}
                  item={item}
                  handleRemove={handleRemoveCenturiesClick}
                />
              );
            })}
      </div>
    </div>
  );
}

export default AddedTags;
