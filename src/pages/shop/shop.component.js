import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionsContainer from "../collection/collection.container";
import DatabaseService from "../../services/DatabaseService";

export default function ShopPage({ match }) {
  useEffect(() => {
    (async () => {
      await DatabaseService.fetchShopCollections();
    })();
  }, []);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionsContainer}
      />
    </div>
  );
}

