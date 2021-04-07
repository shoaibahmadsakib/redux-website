import React from "react";
import MenuItem from "../components/Menu_item/Menu_item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../redux/dorectory/Directory.selector'
import "../Directory/Directory.style.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu ">
      {sections.map(({ id,...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
