import React, { useState } from "react";
import "./directory.component.scss";
import MenuItem from "../menu-item";
import CATEGORIES_DATA from '../../MockedData/categoriesData';

export default function Directory(props) {
  const [sections] = useState(CATEGORIES_DATA);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}
