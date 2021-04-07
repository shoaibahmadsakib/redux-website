import React from "react";
import { Route } from 'react-router-dom'
import CollectionOverview from "../../components/Collection-overview/Collection-overview";
import Collection from '../Collection/Collection.component'
const Shop = ({match}) => {
  return (
    <div className="shop-page">
     <Route exact path={`${match.path}`} component={CollectionOverview} />
     <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
