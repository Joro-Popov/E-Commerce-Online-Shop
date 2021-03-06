import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import PreviewCollection from "../../components/preview-collection";
import { CollectionsOverviewContainer } from './collections-overview.styles';

function CollectionsOverview({collections}) {
    return (
      <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </CollectionsOverviewContainer>
    );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionsOverview);
