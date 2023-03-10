import './Cart.css'
const Cart = () => {
    return (
        <div className='cart-popup'>
            <div className="cart-popup-product">
                <div className='cart-popup-img'>
                    <img src="assets/images/featured/fp1.png" alt="cart" />
                </div>
                <div className="cart-popup-prod-detail">
                    <p className="cart-prod-name">Product Full Name Goes Here</p>
                    <p className="price">
                        <span>1</span> X $99.00
                    </p>
                </div>
                <span className='cart-popup-remove'>&times;</span>
            </div>
            <hr />

            <div className="cart-popup-product">
                <div className='cart-popup-img'>
                    <img src="assets/images/featured/fp1.png" alt="cart" />
                </div>
                <div className="cart-popup-prod-detail">
                    <p className="cart-prod-name">Product Full Name Goes Here</p>
                    <p className="price">
                        <span>1</span> X $99.00
                    </p>
                </div>
                <span className='cart-popup-remove'>&times;</span>
            </div>
            <hr />
            <div className="cart-popup-subtotal">
                <h5>Subtotal: $<span>198.00</span></h5>
            </div>
            <div className="cart-popup-actions">
                <button style={{backgroundColor:"#333333"}}>View cart</button>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Cart