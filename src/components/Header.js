import React from 'react'

export default function Header(props) {
    console.log("Header", props.data)
    return (
        <div>
            {/* <h1>Home Component</h1> */}
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}   </span>
                <img src="https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-512.png" alt="Cart Image"/>
            </div>
            
            
        </div>
    )
}

