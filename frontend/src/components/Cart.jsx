import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ items, removeItem, buyItems }) => {
    let price = 0;


    return (
        <div className="container mt-4">
            <h4 className="text-upper text-left">Products</h4>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Product id</th>
                        <th scope="col">Product name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(i => {
                        price += i.productPrice;
                        return (
                            <tr key={i.productId}>
                                <td>{i.productId}</td>
                                <td>{i.productName}</td>
                                <td>{i.productQuantity}</td>
                                <td>{i.productPrice}</td>
                                <td>
                                    <button onClick={() => removeItem(i.productId)} className="btn btn-sm btn-outline-secondary ml-3">
                                        <span className="fa fa-remove" />
                                        <span>
                                            <strong>Remove</strong>
                                        </span>
                                    </button>
                                    <Link to={`/products/${i.productId}/details`}>
                                        <button className="btn btn-sm btn-outline-dark ml-3">
                                            <span>
                                                <strong>Details</strong>
                                            </span>
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
            <div className="d-flex justify-content-between">
                <h4>{price !== 0 ? "Your total is: " + price : "The cart is empty"}</h4>
                <button disabled={price === 0} className="btn btn-sm width btn-primary" onClick={() =>buyItems(price)}>
                    <span className="fa fa-edit" />
                    <span>
                        <strong>Buy</strong>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Cart;