import React from "react";
import { connect } from 'react-redux';
import "./directory.component.scss";
import MenuItem from "../menu-item";
import { createStructuredSelector } from "reselect";
import { selectSections } from '../../redux/directory/directory.selectors';

function Directory({sections}) {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps, null)(Directory);