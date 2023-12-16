import MaterialDocuments from './MaterialDocuments';
import MaterialImages from './MaterialImages';
import MaterialVideos from './MaterialVideos';
import MaterialAudios from './MaterialAudios';
import { useSelector } from 'react-redux';

function MaterialFiles() {
  const images = useSelector(
    (state) => state.cabinetMaterial.material.files.photo,
  );
  const audios = useSelector(
    (state) => state.cabinetMaterial.material.files.audio,
  );
  const videos = useSelector(
    (state) => state.cabinetMaterial.material.files.video,
  );
  const documents = useSelector(
    (state) => state.cabinetMaterial.material.files.document,
  );

  return (
    <>
      {images.length === 0 ? null : <MaterialImages images={images} />}
      {documents.length === 0 ? null : (
        <MaterialDocuments documents={documents} />
      )}
      {videos.length === 0 ? null : <MaterialVideos videos={videos} />}
      {audios.length === 0 ? null : <MaterialAudios audios={audios} />}
    </>
  );
}

export default MaterialFiles;
