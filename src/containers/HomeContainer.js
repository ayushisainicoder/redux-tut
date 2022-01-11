import React from 'react'
import {connect} from 'react-redux'
import Home from '../components/Home'
import {addToCart, removeToCart} from '../Service/actions/actions'

const mapStateToProps = state=>({
    data: state.cartItems
})

const mapDispatchToProps = dispatch=>({
    addToCartHandler:data => dispatch(addToCart(data)),
    removeToCartHandler:data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)

// export default function HomeContainer() {
//     return (
//         <div>
//             <Home />
//             {/* <h1>Home Container</h1> */}
//         </div>
//     )
// }
