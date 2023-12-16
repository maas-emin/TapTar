import HeaderLinks from './HeaderLinks';
import HeaderInfo from './HeaderInfo';
import { useEffect, useRef, useState } from 'react';

import style from './style.module.css';

function Header() {
  const [size, setSize] = useState({});

  const ref = useRef();

  const resizeHandler = () => {
    const { clientHeight, clientWidth } = ref.current || {};
    setSize({ clientHeight, clientWidth });
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className={style.header}>
      <div ref={ref} className={style.headerBg}>
        <HeaderInfo />
        <HeaderLinks size={size} />
      </div>
    </div>
  );
}

export default Header;
