import React from 'react'
import { removeToCart } from '../Service/actions/actions'

export default function Home(props) {
    console.log("Home", props)
    return (
        <div>
            <h1>Home Component</h1>
            
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://i.pcmag.com/imagery/reviews/01pr6hmgqz7A5wX5hSQWqRs-1.fit_lim.size_625x365.v1632764534.jpg" alt="Mobile Phone Image" />
                </div>
                <div className="text wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price : $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addToCartHandler({price: 1000, name: "i Phone 13"})}>Add To Cart</button>
                
                    <button className="remove-cart-btn" onClick={()=>{props.removeToCartHandler()}}>Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
