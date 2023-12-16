import MaterialAuthor from '../../../General/ShowMaterialComponents/MaterialAuthor';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContributionMaterial } from '../../../../../redux/ducks/cabinetMaterial';
import SkeletonMedia from '../../../General/Skeletons/SkeletonMedia';
import MaterialTitle from '../../../General/ShowMaterialComponents/MaterialTitle';
import MaterialText from '../../../General/ShowMaterialComponents/MaterialText';
import MaterialFiles from '../../../General/ShowMaterialComponents/MaterialFiles';

function ShowHistorianMaterial() {
  const id = useParams().id;

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.cabinetMaterial.loading);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(getContributionMaterial(id));
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
    <div className="containerSend">
      <MaterialAuthor />
      <MaterialTitle />
      <MaterialText />
      <MaterialFiles />
    </div>
  );
}

export default ShowHistorianMaterial;
