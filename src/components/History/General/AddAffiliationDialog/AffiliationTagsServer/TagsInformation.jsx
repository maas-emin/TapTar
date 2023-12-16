import { useDispatch, useSelector } from 'react-redux';
import { addedTypes } from '../../../../../redux/ducks/userTags';
import ServerTagsItem from './ServerTagsItem';

import style from './style.module.css';

function TagsInformation() {
  const dispatch = useDispatch();

  const typesClient = useSelector((state) => state.userTags.tags_information);
  const types = useSelector((state) => state.tags.types);
  const causesID = useSelector((state) => state.tags.causesID);
  const files = useSelector((state) => state.uploadFiles.files);
  const checkType = causesID.some((item) => item === 1);

  const handleAddedTypesClick = (item, check) => {
    if (check) return;
    dispatch(addedTypes(item));
  };

  if (files.group && !checkType) return null;

  return (
    <div className={style.tags__affiliationBlockAdd}>
      <div className={style.tags__title}>Тип/принадлежность:</div>
      <div className={style.tags__affiliation}>
        {types.map((item) => {
          const checkTag = typesClient.some((tag) => tag.id === item.id);
          return (
            <ServerTagsItem
              key={item.id}
              item={item}
              handleAdded={handleAddedTypesClick}
              checkTag={checkTag}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TagsInformation;
