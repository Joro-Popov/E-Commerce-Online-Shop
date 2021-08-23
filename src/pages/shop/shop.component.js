import React, { useEffect } from "react";
import {connect} from 'react-redux';
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionsOverview from "../../components/collections-overview";
import CollectionPage from "../collection";
import DatabaseService from "../../services/DatabaseService";
import WithSpinner from "../../components/with-spinner";
import { selectIsLoading } from "../../redux/common/common.selectors";

function ShopPage({ match, isLoading }) {
  useEffect(() => {
    (async () => {
      await DatabaseService.fetchShopCollections();
    })();
  }, []);

  const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
  const CollectionPageWithSpinner = WithSpinner(CollectionPage);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props}/>}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
      />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

export default connect(mapStateToProps, null)(ShopPage);
