import React from 'react'
import '../CollectionPreview/PreviewCollection.scss'
import CollectionItem from '../Collection_Item/CollectionItem';

const PreviewCollection =({items ,title})=> (
    <div className="collection-preview">
      <h1 className="title">
       {title.toUpperCase()}
      </h1>
      <div className="preview">
            {
                items.filter((items,inx)=> inx <4).map( (item)=>(
                    <CollectionItem key={item.id} item={item }/>
                ))
            }
      </div>
    </div>
)
export default PreviewCollection;