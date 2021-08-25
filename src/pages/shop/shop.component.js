import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Route } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionsContainer from "../collection/collection.container";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

function ShopPage({ match, fetchCollectionsStart }) {
  useEffect(() => {
    fetchCollectionsStart();
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

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);