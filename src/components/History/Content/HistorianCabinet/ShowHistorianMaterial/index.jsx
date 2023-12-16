import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { getShowMaterial } from '../../../../../redux/ducks/cabinetMaterial';
import DeleteButton from './DeleteButton';
import SkeletonMedia from '../../../General/Skeletons/SkeletonMedia';
import MaterialTitle from '../../../General/ShowMaterialComponents/MaterialTitle';
import MaterialText from '../../../General/ShowMaterialComponents/MaterialText';
import MaterialFiles from '../../../General/ShowMaterialComponents/MaterialFiles';
import MaterialAuthor from '../../../General/ShowMaterialComponents/MaterialAuthor';

import style from './style.module.css';

function ShowHistorianMaterial() {
  const id = useParams().id;

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.cabinetMaterial.loading);

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
      dispatch(getShowMaterial(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="containerSend">
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
          {size.clientWidth > 1328 ? null : (
            <div className={style.material__buttons}>
              <DeleteButton />
            </div>
          )}
        </div>
      </div>
      {size.clientWidth > 1328 ? (
        <div className={style.material__buttons}>
          <DeleteButton />
        </div>
      ) : null}
    </div>
  );
}

export default ShowHistorianMaterial;
