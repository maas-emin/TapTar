import CredibilityIcons from '../../../../../../Svg/CredibilityIcons';
import style from './style.module.css';

function TagsCredibility(props) {
  return (
    <div className={style.credibility}>
      <div className={style.credibility__title}>Достоверность:</div>
      <div className={style.credibility__block}>
        {!props.credibility
          ? null
          : props.credibility.map((item) => {
              return (
                <div key={item.id} className={style.credibility__tag}>
                  <CredibilityIcons title={item.title} />
                  <p>{item.title}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default TagsCredibility;
