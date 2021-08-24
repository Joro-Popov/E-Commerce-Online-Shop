import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsLoading } from "../../redux/common/common.selectors";
import WithSpinner from '../with-spinner';
import CollectionsOverview from '../collections-overview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

// Currying all functions together
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionsOverview);

export default CollectionsOverviewContainer;
