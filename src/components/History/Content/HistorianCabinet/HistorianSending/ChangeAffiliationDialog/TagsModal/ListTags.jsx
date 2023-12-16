import { useContext } from 'react';
import { AffiliationContext } from '../AffiliationContainer/context';
import ListTagsItem from '../misk/ListTagsItem';

import style from './style.module.css';

function ListTags({ titleTag, tags }) {
  const { tagsModal, setCentury, century, information, setInformation } =
    useContext(AffiliationContext);

  const handleAddedCredibilityClick = (tag, checkTag) => {
    if (checkTag) {
      return;
    }
    if (tagsModal.title === 'Теги (тип/принадлежность):') {
      const newInformation = [...information, tag];
      setInformation(newInformation);
      return;
    }
    const newCentury = [...century, tag];
    setCentury(newCentury);
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
