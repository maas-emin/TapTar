import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeIncomingMaterials } from '../../../../../../../redux/ducks/incomingMaterials';
import { AffiliationContext } from '../AffiliationContainer/context';

import style from './style.module.css';

function SendBtn() {
  const {
    nameError,
    setNameError,
    yearError,
    setYearError,
    authorError,
    setAuthorError,
    commentError,
    setCommentError,
    title,
    year,
    author,
    location,
    comment,
    information,
    century,
    handleCloseAffiliation,
    credibilityError,
    setCredibilityError,
    credibility,
    bookmark,
    albums,
    effects,
  } = useContext(AffiliationContext);

  const body = document.querySelector('body');

  const dispatch = useDispatch();

  const [buttonProcessedHovered, setButtonProcessedHovered] = useState(false);
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();
  const files = useSelector(
    (state) => state.application.workplaceMaterialProcess.files,
  );

  const handleFailAddClick = () => {
    if (!title) {
      return setNameError(' Название не может быть пустым');
    }
    if (title.length < 4) {
      return setNameError('В название не может быть меньше 4 символов');
    }
    if (credibility.length === 0) {
      return setCredibilityError(
        'Необходимо добавить хотя бы один тег достоверности',
      );
    }
    if (year.length !== 0 && /\D/.test(year)) {
      return setYearError('Год только числа');
    }
    if (year.length !== 0 && +year > currentYear) {
      return setYearError('Год не может быть больше текущего');
    }
    if (author.length !== 0 && author.length < 4) {
      return setAuthorError('Автор не может быть меньше 4 символов');
    }
    if (comment.length !== 0 && comment.length > 200) {
      return setCommentError('В комментарии не может быть больше 200 символов');
    }
    if (author.length !== 0 && /\d/.test(author)) {
      return setAuthorError('В авторе не может быть чисел');
    }
    body.style.overflow = 'visible';
    handleCloseAffiliation();
    dispatch(
      ChangeIncomingMaterials(
        files,
        bookmark,
        albums,
        title,
        year,
        author,
        location,
        comment,
        information,
        century,
        credibility,
        effects,
      ),
    );
  };

  return (
    <>
      <div
        onMouseEnter={() => setButtonProcessedHovered(true)}
        onMouseLeave={() => setButtonProcessedHovered(false)}
        onClick={handleFailAddClick}
        className={`${style.dialog__button} ${
          credibilityError ||
          nameError ||
          yearError ||
          authorError ||
          commentError
            ? style.btn__error
            : ''
        }`}
      >
        {buttonProcessedHovered ? (
          <svg
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.56335 8.93705L14.5669 0.611043C15.3436 -0.198048 16.6212 -0.204154 17.4067 0.595777C18.1923 1.39571 18.1982 2.71163 17.4216 3.52072L7.93582 13.3886C7.3311 14.0175 6.40328 14.1763 5.63256 13.7947L5.53177 13.7428L0.578434 8.58899C-0.198211 7.7799 -0.192283 6.46398 0.593256 5.66405C1.37879 4.86412 2.65641 4.87022 3.43305 5.67931L6.56335 8.934V8.93705Z"
              fill="#fff"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.56311 8.93547L14.5662 0.611585C15.3443 -0.198525 16.6197 -0.204312 17.4062 0.597118C18.1927 1.39855 18.1984 2.71209 17.4202 3.5222L7.93676 13.3882C7.3328 14.016 6.4058 14.178 5.6333 13.7932L5.53218 13.7441L0.579749 8.59406C-0.198369 7.78395 -0.192751 6.47042 0.593795 5.66899C1.38034 4.86756 2.65567 4.87334 3.43379 5.68345L6.56311 8.93836V8.93547ZM6.29063 12.6128C6.53783 12.6967 6.81874 12.6301 7.00414 12.4363L16.4876 2.57032C16.7573 2.28967 16.7545 1.82964 16.482 1.55478C16.2095 1.27703 15.7629 1.27993 15.496 1.56057L6.56311 10.8537L2.50398 6.62955C2.2343 6.3489 1.78766 6.34601 1.51799 6.62376C1.2455 6.90151 1.24269 7.36154 1.51237 7.63929L6.29344 12.6128H6.29063Z"
              fill="white"
            />
          </svg>
        )}
        <p>Завершить обработку</p>
      </div>
      {nameError ||
      yearError ||
      authorError ||
      credibilityError ||
      commentError ? (
        <div className={style.error}>
          {nameError ||
            yearError ||
            authorError ||
            credibilityError ||
            commentError}
        </div>
      ) : null}
    </>
  );
}

export default SendBtn;
