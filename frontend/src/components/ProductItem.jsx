import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, addToCart, user }) => {


    return (
        <div className="item">
            <div className="card" style={{ padding: '10px', width: '17rem', minHeight: '27rem', maxHeight: '30rem' }} >
                <Link to={`/products/${product.productId}/details`}>
                    <img style={{width:'15rem'}} src={product.productImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.productName}</h5>
                        <p className="card-text">Price: {product.productPrice.toString().substr(0,2) + ','+ product.productPrice.toString().substr(2, 3)+" den"} </p>
                        <p className="card-text">Brand: {product.productBrand} </p>
                        <p className="card-text">Quantity: {product.productQuantity} </p>

                    </div>
                </Link>
                {user ? <button disabled={!user} className="btn btn-success" onClick={() => addToCart(product.productId)}><span className="fa fa-cart-plus"></span> Add to cart</button> :
                <button disabled={!user} className="btn btn-secondary" onClick={() => addToCart(product.productId)}>Login required</button>
                }
                        
            </div>
        </div>

    );
}

export default ProductItem;
