import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import {
  addedCenturies,
  addedTypes,
} from '../../../../../../../redux/ducks/userTags';
import { AffiliationContext } from '../context';
import ListTagsItem from '../misk/ListTagsItem';

import style from './style.module.css';

function ListTags({ titleTag, tags }) {
  const { tagsModal } = useContext(AffiliationContext);

  const dispatch = useDispatch();

  const handleAddedCredibilityClick = (tag, checkTag) => {
    if (checkTag) {
      return;
    }
    if (tagsModal.title === 'Теги (тип/принадлежность):') {
      return dispatch(addedTypes(tag));
    }
    if (tagsModal.title === 'Теги (период/век):') {
      return dispatch(addedCenturies(tag));
    }
  };

  return (
    <div className={style.tags__container}>
      <div className={style.tags__title}>Список тегов:</div>
      <div className={style.tags__items}>
        {tags.map((item) => {
          const checkTag = titleTag.some((tag) => tag.id === item.id);
          return (
            <ListTagsItem
              key={item.id}
              item={item}
              checkTag={checkTag}
              handleAdded={handleAddedCredibilityClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ListTags;
