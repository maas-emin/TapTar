import { useContext } from 'react';
import { AffiliationContext } from '../AffiliationContainer/context';
import AddedTagsItem from '../misk/AddedTagsItem';

import style from './style.module.css';

function AddedTags({ titleTag, addedTitle }) {
  const { tagsModal, information, century, setCentury, setInformation } =
    useContext(AffiliationContext);

  const handleRemoveCredibilityClick = (id) => {
    if (tagsModal.title === 'Теги (тип/принадлежность):') {
      const newInformation = information.filter((item) => item.id !== id);
      setInformation(newInformation);
      return;
    }
    const newCentury = century.filter((item) => item.id !== id);
    setCentury(newCentury);
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
