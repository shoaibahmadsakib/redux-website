import React from "react";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/Shop.selector";
import { connect } from "react-redux";
import "./Collection-overview.scss";
import PreviewCollection from "../CollectionPreview/PreviewCollection";

const CollectionOverview = ({collections}) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollection }) => (
        <PreviewCollection key={id} {...otherCollection} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
  });
  
export default connect(mapStateToProps)(CollectionOverview);
