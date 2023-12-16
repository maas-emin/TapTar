import { useSelector } from 'react-redux';

import style from './style.module.css';

function ChangeCredibility(props) {
  const credibility = useSelector((state) => state.tags.credibility);

  const handleAddedCredibilityClick = (tag, checkTag) => {
    if (!checkTag) {
      const newCredibility = [...props.credibility, tag];
      props.setCredibility(newCredibility);
      props.setCredibilityError('');
    } else {
      const filterCredibility = props.credibility.filter(
        (item) => item.id !== tag.id,
      );
      props.setCredibility(filterCredibility);
      props.setCredibilityError('');
    }
  };

  return (
    <div className={style.credibility}>
      <div className={style.credibility__title}>Достоверность:</div>
      <div className={style.credibility__block}>
        {!credibility
          ? null
          : credibility.map((item) => {
              const checkTag = props.credibility.some(
                (tag) => tag.id === item.id,
              );
              return (
                <div
                  onClick={() => handleAddedCredibilityClick(item, checkTag)}
                  key={item.id}
                  className={style.credibility__tag}
                >
                  <p>{item.title}</p>
                  <div className={style.checkCircle}>
                    <div
                      className={`${style.circleInner} ${
                        !checkTag ? style['circleInner--active'] : ''
                      }`}
                    ></div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default ChangeCredibility;
