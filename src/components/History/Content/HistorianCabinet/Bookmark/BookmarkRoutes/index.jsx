import { Route, Switch } from 'react-router-dom';
import Material from '../BookmarkMaterials/index';
import Photo from '../BookmarkPhotos/index';
import Video from '../BookmarkVideos';
import Audio from '../BookmarkAudios';
import Document from '../BookmarkDocuments';

import style from './style.module.css';

function BookmarkRoutes() {
  return (
    <div className={style.routes}>
      <Switch>
        <Route exact path="/history/my-materials" component={Material} />
        <Route path="/history/my-materials/photo" component={Photo} />
        <Route path="/history/my-materials/audio" component={Audio} />
        <Route path="/history/my-materials/video" component={Video} />
        <Route path="/history/my-materials/document" component={Document} />
      </Switch>
    </div>
  );
}

export default BookmarkRoutes;
