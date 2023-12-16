import MaterialText from './MaterialText';
import MaterialTitle from './MaterialTitle';
import SendingTitle from './SendingTitle';
import MaterialFiles from './MaterialFiles';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { showProcessMaterial } from '../../../../../redux/ducks/incomingMaterials';
import MaterialButtons from './MaterialButtons';
import SkeletonMedia from '../../../General/Skeletons/SkeletonMedia';

import style from './style.module.css';

function ShowProcessMaterial() {
  const id = useParams().id;

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.incomingMaterials.loading);

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

  useEffect(() => {
    if (id !== undefined) {
      return dispatch(showProcessMaterial(id));
    }

    return;
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className={style.containerSkeleton}>
        <SkeletonMedia />
      </div>
    );
  }

  return (
    <div ref={ref} className={style.material}>
      <div className={style.material__send}>
        <div className="containerSend">
          <SendingTitle />
          <MaterialTitle />
          <MaterialText />
          <MaterialFiles />
          {size.clientWidth > 1430 ? null : (
            <div className={style.material__buttons}>
              <MaterialButtons />
            </div>
          )}
        </div>
      </div>
      {size.clientWidth > 1430 ? (
        <div className={style.material__buttons}>
          <MaterialButtons />
        </div>
      ) : null}
    </div>
  );
}

export default ShowProcessMaterial;
