import { useDispatch, useSelector } from 'react-redux';
import { addedCenturies } from '../../../../../redux/ducks/userTags';
import ServerTagsItem from './ServerTagsItem';

import style from './style.module.css';

function TagsCenturies() {
  const dispatch = useDispatch();

  const centuriesClient = useSelector((state) => state.userTags.tags_century);
  const centuries = useSelector((state) => state.tags.centuries);
  const files = useSelector((state) => state.uploadFiles.files);
  const causesID = useSelector((state) => state.tags.causesID);
  const checkTime = causesID.some((item) => item === 2);

  const handleAddedCenturiesClick = (item, check) => {
    if (check) return;
    dispatch(addedCenturies(item));
  };

  if (files.group && !checkTime) return null;

  return (
    <div className={style.tags__affiliationBlockAdd}>
      <div className={style.tags__title}>Период/век:</div>
      <div className={style.tags__affiliation}>
        {centuries.map((item) => {
          const checkTag = centuriesClient.some((tag) => tag.id === item.id);
          return (
            <ServerTagsItem
              key={item.id}
              item={item}
              handleAdded={handleAddedCenturiesClick}
              checkTag={checkTag}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TagsCenturies;
