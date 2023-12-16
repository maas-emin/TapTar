import style from './style.module.css';

function CredibilityItem({ handleAdded, item, checkTag }) {
  return (
    <div
      onClick={() => handleAdded(item, checkTag)}
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
}

export default CredibilityItem;
