import MaterialAuthor from '../MaterialComponents/MaterialAuthor';
import MaterialTitle from '../MaterialComponents/MaterialTitle';
import MaterialText from '../MaterialComponents/MaterialText';
import MaterialFiles from '../MaterialComponents/MaterialFiles';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { showBlockedMaterial } from '../../../../../redux/ducks/incomingMaterials';
import MessageSendBtn from './MessageSend';
import SkeletonMedia from '../../../General/Skeletons/SkeletonMedia';

import style from './style.module.css';

function ShowBlockedMaterial() {
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
      return dispatch(showBlockedMaterial(id));
    }
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
          <MaterialAuthor />
          <MaterialTitle />
          <MaterialText />
          <MaterialFiles />
          {size.clientWidth > 1430 ? null : (
            <div className={style.material__buttons}>
              <MessageSendBtn />
            </div>
          )}
        </div>
      </div>
      {size.clientWidth > 1430 ? (
        <div className={style.material__buttons}>
          <MessageSendBtn />
        </div>
      ) : null}
    </div>
  );
}

export default ShowBlockedMaterial;
