import React, { Component } from 'react'
import MenuItem from '../components/Menu_item/Menu_item.component'
import '../Directory/Directory.style.scss'
export class Directory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sections:[{
                 title:'Boy',
                 image:'https://i.pinimg.com/originals/71/5e/8d/715e8da8baa3e8dbd9dd36ccdcce7f6f.jpg',
                 
                 id:1,
             },
             {
                title:'Girl',
                image:'https://c8.alamy.com/comp/PX3A0J/three-pretty-girls-go-shopping-in-the-fashion-luxury-shop-black-friday-concept-PX3A0J.jpg',
                id:2,
            },
            {
                title:'Baby',
                image:'https://www.babyshop.com/images/867206/hero_xsmall.jpg',
                id:3,
            },
            {
                title:'toys',
                image:'https://i.pinimg.com/originals/4e/b0/c9/4eb0c9057c39e4cdc17be07797d65e0e.jpg',
                size:'large',
                id:4,
            },
            {
                title:'shoe',
                image:'https://previews.123rf.com/images/vladstar/vladstar1309/vladstar130900061/22851347-background-with-shoes-on-shelves-of-shop.jpg',
                size:'large',
                id:5,
            },
            ]
        }
    }
    
    render() {
        return (
            <div className="directory-menu ">
                {
                    this.state.sections.map(({id, title,image ,size}) => (
                        <MenuItem key={id} title={title} image={image} size={size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory
