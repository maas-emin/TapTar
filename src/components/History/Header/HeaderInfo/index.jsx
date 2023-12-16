import ProjectName from './ProjectName';
import style from './style.module.css';

function HeaderInfo() {
  return (
    <div className={style.info}>
      <ProjectName />
    </div>
  );
}

export default HeaderInfo;
