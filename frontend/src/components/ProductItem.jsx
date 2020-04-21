import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, addToCart, user }) => {


    return (

        <div id="item" className="card" style={{ padding: '10px', width: '17rem', minHeight: '27rem', maxHeight: '30rem' }} >
            <Link to={`/products/${product.productId}/details`}>
                <img style={{ width: '15rem' }} src={product.productImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.productName}</h5>
                    <p className="card-text">Price: {product.productPrice.toString().substr(0, 2) + ',' + product.productPrice.toString().substr(2, 3) + " den"} </p>
                    <p className="card-text">Brand: {product.productBrand} </p>
                    <p className="card-text">Availability: {product.productQuantity > 0 ? <span className="text-success fa fa-check"></span> : <span className="text-danger fa fa-times"></span>} </p>

                </div>
            </Link>
            {user ? (product.productQuantity === 0 ? <button disabled={true} className="btn btn-danger"><span className=" fa fa-exclamation-circle"></span> Out of stock</button> : <button disabled={!user} className="btn btn-success" onClick={() => addToCart(product.productId)}><span className="fa fa-cart-plus"></span> Add to cart</button>) :
                <button disabled={!user} className="btn btn-secondary">Login required</button>
            }

        </div>


    );
}

export default ProductItem;
