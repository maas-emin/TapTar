import SkeletonMedia from '../../../General/Skeletons/SkeletonMedia';
import MaterialAuthor from '../MaterialComponents/MaterialAuthor';
import MaterialTitle from '../MaterialComponents/MaterialTitle';
import MaterialText from '../MaterialComponents/MaterialText';
import MaterialFiles from '../MaterialComponents/MaterialFiles';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { showProcessedMaterialApprover } from '../../../../../redux/ducks/approver';

import style from './style.module.css';

function ShowProcessedMaterial() {
  const id = useParams().id;
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.approver.loading);

  useEffect(() => {
    if (id !== undefined) {
      return dispatch(showProcessedMaterialApprover(id));
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
    <div className={style.material}>
      <div className={style.material__send}>
        <div className="containerSend">
          <MaterialAuthor />
          <MaterialTitle />
          <MaterialText />
          <MaterialFiles />
        </div>
      </div>
    </div>
  );
}

export default ShowProcessedMaterial;
