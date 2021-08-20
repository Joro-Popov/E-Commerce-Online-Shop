import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopItems } from '../../redux/shop/shop.selectors';
import PreviewCollection from "../../components/preview-collection";
import './collections-overview.styles.scss'

function CollectionsOverview({collections}) {
    return (
      <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionsOverview);
