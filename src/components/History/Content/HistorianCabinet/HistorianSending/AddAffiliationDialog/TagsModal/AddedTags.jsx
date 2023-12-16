import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import {
  removeCenturies,
  removeTypes,
} from '../../../../../../../redux/ducks/userTags';
import { AffiliationContext } from '../context';
import AddedTagsItem from '../misk/AddedTagsItem';

import style from './style.module.css';

function AddedTags({ titleTag, addedTitle }) {
  const { tagsModal } = useContext(AffiliationContext);

  const dispatch = useDispatch();

  const handleRemoveCredibilityClick = (id) => {
    if (tagsModal.title === 'Теги (тип/принадлежность):') {
      return dispatch(removeTypes(id));
    }
    if (tagsModal.title === 'Теги (период/век):') {
      return dispatch(removeCenturies(id));
    }
  };

  return (
    <>
      <div className={style.modalTagsTitle}>{addedTitle}</div>
      <div className={`${style.tags__container} ${style.modal}`}>
        <div className={`${style.tags__title} ${style.modal}`}>
          Добавленные теги:
        </div>
        <div className={style.tags__items}>
          {!titleTag
            ? null
            : titleTag.map((item) => {
                return (
                  <AddedTagsItem
                    key={item.id}
                    item={item}
                    handleRemove={handleRemoveCredibilityClick}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
}

export default AddedTags;
