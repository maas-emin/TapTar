import { useDispatch, useSelector } from 'react-redux';
import { removeTypes } from '../../../../../../../redux/ducks/userTags';
import AddedTagsItem from '../misk/AddedTagsItem';

import style from './style.module.css';

function AddedTags() {
  const dispatch = useDispatch();

  const typesClient = useSelector((state) => state.userTags.tags_information);

  const handleRemoveTypesClick = (id) => {
    return dispatch(removeTypes(id));
  };

  return (
    <div className={style.tags__container}>
      <div className={style.tags__subTitle}>Добавленные:</div>
      <div className={style.tags__items}>
        {!typesClient
          ? null
          : typesClient.map((item) => {
              return (
                <AddedTagsItem
                  key={item.id}
                  item={item}
                  handleRemove={handleRemoveTypesClick}
                />
              );
            })}
      </div>
    </div>
  );
}

export default AddedTags;
