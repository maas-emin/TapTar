import { useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addedCredibility,
  removeCredibility,
} from '../../../../../../../redux/ducks/userTags';
import { AffiliationContext } from '../context';
import CredibilityItem from './CredibilityItem';

import style from './style.module.css';

function AffiliationCredibility() {
  const { setCredibilityError, credibilityError } =
    useContext(AffiliationContext);

  const dispatch = useDispatch();

  const credibility = useSelector((state) => state.tags.credibility);
  const credibilityState = useSelector(
    (state) => state.userTags.tags_credibility,
  );

  const handleAddedCredibilityClick = useCallback(
    (tag, checkTag) => {
      if (!checkTag) {
        if (credibilityError) {
          setCredibilityError('');
        }
        dispatch(addedCredibility(tag));
      } else {
        setCredibilityError('');
        dispatch(removeCredibility(tag.id));
      }
    },
    [dispatch, credibilityError, setCredibilityError],
  );

  return (
    <div className={style.credibility}>
      <div className={style.credibility__title}>Достоверность:</div>
      <div className={style.credibility__block}>
        {!credibility
          ? null
          : credibility.map((item) => {
              const checkTag = credibilityState.some(
                (tag) => tag.id === item.id,
              );
              return (
                <CredibilityItem
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

export default AffiliationCredibility;
