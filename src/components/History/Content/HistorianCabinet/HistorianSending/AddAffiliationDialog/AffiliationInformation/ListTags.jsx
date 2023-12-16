import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addedTypes } from '../../../../../../../redux/ducks/userTags';
import { AffiliationContext } from '../context';
import ListTagsItem from '../misk/ListTagsItem';

import style from './style.module.css';

function ListTags() {
  const { setTagsModal } = useContext(AffiliationContext);

  const dispatch = useDispatch();

  const types = useSelector((state) => state.tags.types);
  const typesClient = useSelector((state) => state.userTags.tags_information);

  const handleAddedTypesClick = (tag, checkTag) => {
    if (checkTag) return;
    dispatch(addedTypes(tag));
  };

  const openModalChangeTags = () => {
    setTagsModal({
      open: true,
      title: 'Теги (тип/принадлежность):',
    });
  };

  return (
    <div className={style.tags__container}>
      <div className={style.tags__subTitle}>Список тегов:</div>
      <div className={style.tags__items}>
        {types.map((item) => {
          const checkTag = typesClient.some((tag) => tag.id === item.id);
          return (
            <ListTagsItem
              key={item.id}
              item={item}
              checkTag={checkTag}
              handleAdded={handleAddedTypesClick}
            />
          );
        })}
      </div>
      <div onClick={openModalChangeTags} className={style.btnShow}>
        Просмотреть все
      </div>
    </div>
  );
}

export default ListTags;
