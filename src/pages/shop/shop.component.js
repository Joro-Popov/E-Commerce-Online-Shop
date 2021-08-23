import React from "react";
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview';
import CollectionPage from '../collection';

export default function ShopPage({ match }) {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

