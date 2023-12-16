import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { AffiliationContext } from '../AffiliationContainer/context';
import ListTagsItem from '../misk/ListTagsItem';

import style from './style.module.css';

function ListTags() {
  const { setTagsModal, setInformation, information } =
    useContext(AffiliationContext);

  const types = useSelector((state) => state.tags.types);

  const handleAddedTypesClick = (tag, checkTag) => {
    const newInformation = [...information, tag];

    if (checkTag) {
      return;
    }

    return setInformation(newInformation);
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
          const checkTag = information.some((tag) => tag.id === item.id);
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
