import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { AffiliationContext } from '../AffiliationContainer/context';
import ListTagsItem from '../misk/ListTagsItem';

import style from './style.module.css';

function ListTags() {
  const { setTagsModal, century, setCentury } = useContext(AffiliationContext);

  const centuries = useSelector((state) => state.tags.centuries);

  const handleAddedCenturiesClick = (tag, checkTag) => {
    const newCentury = [...century, tag];

    if (checkTag) {
      return;
    }

    return setCentury(newCentury);
  };

  const openModalChangeTags = () => {
    setTagsModal({
      open: true,
      title: 'Теги (период/век):',
    });
  };

  return (
    <div className={style.tags__container}>
      <div className={style.tags__subTitle}>Список тегов:</div>
      <div className={style.tags__items}>
        {centuries.map((item) => {
          const checkTag = century.some((tag) => tag.id === item.id);
          return (
            <ListTagsItem
              key={item.id}
              item={item}
              checkTag={checkTag}
              handleAdded={handleAddedCenturiesClick}
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
