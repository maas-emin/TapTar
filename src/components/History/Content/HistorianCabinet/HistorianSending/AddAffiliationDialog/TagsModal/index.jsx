import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import CloseButton from '../../../../../General/buttons/CloseButton/CloseButton';
import { AffiliationContext } from '../context';
import AddedTags from './AddedTags';
import ListTags from './ListTags';
import SearchTags from './SearchTags';

import style from './style.module.css';

function TagsModal() {
  const { tagsModal, setTagsModal, handleCloseAffiliation } =
    useContext(AffiliationContext);

  const types = useSelector((state) => state.tags.types);
  const centuries = useSelector((state) => state.tags.centuries);
  const centuriesClient = useSelector((state) => state.userTags.tags_century);
  const typesClient = useSelector((state) => state.userTags.tags_information);

  let titleTag = [];
  let itemTag = [];
  let addedTitle = '';

  const [filterTags, setFilterTags] = useState('');

  const closeModal = () => {
    setTagsModal({
      open: false,
      title: '',
    });
  };

  const changeFilterTags = (e) => {
    setFilterTags(e.target.value);
  };

  if (tagsModal.title === 'Теги (тип/принадлежность):') {
    titleTag = typesClient;
    itemTag = types;
    addedTitle = 'Теги (тип/принадлежность):';
  }
  if (tagsModal.title === 'Теги (период/век):') {
    titleTag = centuriesClient;
    itemTag = centuries;
    addedTitle = 'Теги (период/век):';
  }

  const tags = itemTag.filter(
    (tag) => tag.title.toUpperCase().indexOf(filterTags.toUpperCase()) > -1,
  );

  return (
    <div className={style.form__dialog}>
      <CloseButton
        bgColor="initial"
        handleClick={handleCloseAffiliation}
        width="35px"
        height="35px"
        top="10px"
        right="13px"
        boxShadow="none"
      />
      <AddedTags addedTitle={addedTitle} titleTag={titleTag} />
      <SearchTags changeFilterTags={changeFilterTags} filterTags={filterTags} />
      <ListTags tags={tags} titleTag={titleTag} />
      <div onClick={closeModal} className={style.closeTagsModal}>
        Вернуться назад
      </div>
    </div>
  );
}

export default TagsModal;
