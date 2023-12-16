import React from 'react';
import { Route } from 'react-router-dom';
import WorkshopAudios from '../WorkshopAudios';
import WorkshopVideos from '../WorkshopVideos';
import WorkshopDocuments from '../WorkShopDocuments';
import WorkshopPhotos from '../WorkshopPhotos';
import WorkshopProcessed from '../WorkshopProcessed';
import WorkshopProcessing from '../WorkshopProcessing';
import WorkshopText from '../WorkshopText';
import WorkshopMaterials from '../WorkshopMaterials';

import style from './style.module.css';

function WorkshopRoutes() {
  return (
    <div className={style.routes}>
      <Route exact path="/history/workshop" component={WorkshopMaterials} />
      <Route path="/history/workshop/photos" component={WorkshopPhotos} />
      <Route path="/history/workshop/videos" component={WorkshopVideos} />
      <Route path="/history/workshop/audios" component={WorkshopAudios} />
      <Route path="/history/workshop/text" component={WorkshopText} />
      <Route path="/history/workshop/documents" component={WorkshopDocuments} />
      <Route path="/history/workshop/processed" component={WorkshopProcessed} />
      <Route
        path="/history/workshop/processing"
        component={WorkshopProcessing}
      />
    </div>
  );
}

export default WorkshopRoutes;
