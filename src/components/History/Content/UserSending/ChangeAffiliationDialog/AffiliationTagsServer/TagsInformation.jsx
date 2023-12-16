import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { AffiliationContext } from '../context';
import ServerTagsItem from './ServerTagsItem';

import style from './style.module.css';

function TagsInformation() {
  const { informationClient, setInformationClient, checkType } =
    useContext(AffiliationContext);

  const types = useSelector((state) => state.tags.types);
  const files = useSelector((state) => state.application.changeFiles.files);

  const pressChangeInformation = (tag, checkTag) => {
    if (checkTag) return;

    const addInformation = [...informationClient, tag];
    setInformationClient(addInformation);
  };

  if (files.group_uid && !checkType) return null;

  return (
    <div className={style.tags__affiliationBlockAdd}>
      <div className={style.tags__title}>Тип/принадлежность:</div>
      <div className={style.tags__affiliation}>
        {types.map((item) => {
          const checkTag = informationClient.some((tag) => tag.id === item.id);
          return (
            <ServerTagsItem
              key={item.id}
              item={item}
              handleAdded={pressChangeInformation}
              checkTag={checkTag}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TagsInformation;
