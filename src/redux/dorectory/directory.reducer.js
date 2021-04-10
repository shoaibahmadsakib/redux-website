const INITIAL_STATE={
    sections:[
        {
        title:'hats',
        image:'https://i.pinimg.com/originals/71/5e/8d/715e8da8baa3e8dbd9dd36ccdcce7f6f.jpg',
        
        id:1,
        linkUrl: 'shop/hats'

    },
    {
       title:'Girl',
       image:'https://c8.alamy.com/comp/PX3A0J/three-pretty-girls-go-shopping-in-the-fashion-luxury-shop-black-friday-concept-PX3A0J.jpg',
       id:2,
       linkUrl: 'shop/jackets'
   },
   {
       title:'Baby',
       image:'https://www.babyshop.com/images/867206/hero_xsmall.jpg',
       id:3,
       linkUrl: 'shop/snekers'
   },
   {
       title:'toys',
       image:'https://i.pinimg.com/originals/4e/b0/c9/4eb0c9057c39e4cdc17be07797d65e0e.jpg',
       size:'large',
       id:4,
       linkUrl: 'shop/womens'
   },
   {
       title:'shoe',
       image:'https://previews.123rf.com/images/vladstar/vladstar1309/vladstar130900061/22851347-background-with-shoes-on-shelves-of-shop.jpg',
       size:'large',
       id:5,
       linkUrl: 'shop/mens'
   },
   ]
}
const directoryReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        default:
            return state;
    }
}
export default directoryReducer