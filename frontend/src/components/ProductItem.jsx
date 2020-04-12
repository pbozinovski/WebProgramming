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
                        <p className="card-text">Price: {product.productPrice} </p>
                        <p className="card-text">Brand: {product.productBrand} </p>
                        <p className="card-text">Quantity: {product.productQuantity} </p>

                    </div>
                </Link>
                        <button disabled={!user} className="btn btn-primary" onClick={() => addToCart(product.productId)}>Add to cart</button>
            </div>
        </div>

    );
}

export default ProductItem;
