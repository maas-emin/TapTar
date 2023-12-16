import { useContext } from 'react';
import SecondaryEffectIcons from '../../../../../../General/SecondaryEffectIcons';
import { EffectContext } from '../effectContext';

import style from './style.module.css';

function Header() {
  const { item } = useContext(EffectContext);

  return (
    <div className={style.effectHeader}>
      <SecondaryEffectIcons title={item.title} />
      <div className={style.effectTitle}>{item.title}</div>
    </div>
  );
}

export default Header;
