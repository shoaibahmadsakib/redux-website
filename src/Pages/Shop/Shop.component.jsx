import React, { Component } from 'react'
import PreviewCollection from '../../components/CollectionPreview/PreviewCollection'
import Shop_Data from '../Shop/Shop.data'

export class Shop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collection:Shop_Data
        };
    }
    
    render() {
      const{collection }= this.state
        return (
            <div>
                {
                  collection.map( ({id, ...otherCollection}) =>(
                    <PreviewCollection key={id} {...otherCollection} />
                  ))
                }
            </div>
        )
    }
}

export default Shop 
