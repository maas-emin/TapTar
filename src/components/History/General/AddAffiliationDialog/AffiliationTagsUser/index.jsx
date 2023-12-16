import { useDispatch, useSelector } from 'react-redux';
import {
  removeCenturies,
  removeTypes,
} from '../../../../../redux/ducks/userTags';
import UserTagsItem from './UserTagsItem';

import style from './style.module.css';

function AffiliationTagsUser() {
  const dispatch = useDispatch();

  const centuriesClient = useSelector((state) => state.userTags.tags_century);
  const typesClient = useSelector((state) => state.userTags.tags_information);

  const handleRemoveCenturiesClick = (item) => {
    dispatch(removeCenturies(item));
  };

  const handleRemoveTypesClick = (item) => {
    dispatch(removeTypes(item));
  };

  return (
    <div className={style.tags__affiliationBlockAdd}>
      <div className={style.tags__title}>Добавленные теги:</div>
      <div className={style.tags__affiliation}>
        {!typesClient
          ? null
          : typesClient.map((item) => {
              return (
                <UserTagsItem
                  key={item.id}
                  item={item}
                  handleRemove={handleRemoveTypesClick}
                />
              );
            })}
        {!centuriesClient
          ? null
          : centuriesClient.map((item) => {
              return (
                <UserTagsItem
                  key={item.id}
                  item={item}
                  handleRemove={handleRemoveCenturiesClick}
                />
              );
            })}
      </div>
    </div>
  );
}

export default AffiliationTagsUser;
