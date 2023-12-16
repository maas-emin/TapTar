import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addedCenturies } from '../../../../../../../redux/ducks/userTags';
import { AffiliationContext } from '../context';
import ListTagsItem from '../misk/ListTagsItem';

import style from './style.module.css';

function ListTags() {
  const { setTagsModal } = useContext(AffiliationContext);

  const dispatch = useDispatch();

  const centuries = useSelector((state) => state.tags.centuries);
  const centuriesClient = useSelector((state) => state.userTags.tags_century);

  const handleAddedCenturiesClick = (tag, checkTag) => {
    if (checkTag) return;
    dispatch(addedCenturies(tag));
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
          const checkTag = centuriesClient.some((tag) => tag.id === item.id);
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
