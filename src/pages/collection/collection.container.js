import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsLoading } from "../../redux/common/common.selectors";
import WithSpinner from "../../components/with-spinner";
import Collection from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

// Currying all functions together
const CollectionsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionsContainer;
