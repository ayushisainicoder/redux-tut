import React from 'react'
import {connect} from 'react-redux'
// import Home from '../components/Home'
import Header from '../components/Header'
// import {addToCart} from '../Service/actions/actions'

const mapStateToProps = state=>({
    data: state.cartItems
})

const mapDispatchToProps = dispatch=>({
 
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)

// export default function HomeContainer() {
//     return (
//         <div>
//             <Home />
//             {/* <h1>Home Container</h1> */}
//         </div>
//     )
// }
