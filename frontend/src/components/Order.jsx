import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";


const Order = ({ user }) => {

    const history = useHistory();
    var id = 0;
    if (!user) {
        history.push("/login");
    } else {
        id = user.clientId;
    }

    const override = css`
  display: block;
  margin: 0 auto;
  margin-top:100px;
`;


    const [loading, setLoading] = useState(true);
    const [client, setClient] = useState({
        orders: [
            {
                orderId: null,
                orderDate: '',
                payment: {

                },
                products: [
                    {
                        productId: null,
                        productName: null,
                        productQuantity: null,
                        productPrice: null,
                        productBrand: '',
                        productDescription: '',
                        productType: '',
                        productImage: ''
                    }
                ]
            }
        ]
    });
    useEffect(() => {
        if (user)
            axios.get(`http://localhost:8080/api/clients/${id}`).then(response => {
                setClient(response.data);
                console.log("Data called!");
                console.log(response.data, "test");
                setLoading(false);
            });

        console.log("Data called!");
    }, [id, user]);
    return (
        <>

            {loading ? <ClipLoader
                css={override}
                size={150}
                //size={"150px"} this also works
                color={"#123abc"}
                loading={loading}
            /> :
                <div className="container mt-4">
                    <h3>Orders made by: {client.clientFirstname + " " + client.clientLastname}</h3>
                    <br />
                    {client.orders[0] ? client.orders.map(order => {
                        return (
                            <div key={order.orderId}>
                                <h5>Order number: {order.orderId}</h5>
                                <h6>Date ordered: {order.orderDate.substr(0, 24)}</h6>
                                <ul className="list-group">
                                    {
                                        order.products.map(product => {
                                            return (
                                                <li className="list-group-item" key={product.productId}>{product.productName + "  -  " + product.productPrice}</li>
                                            )
                                        })

                                    }


                                    <li className="list-group-item list-group-item-success">Total: {order.payment.paymentPrice}</li>
                                </ul>
                                <br />
                            </div>
                        )
                    }
                    ) : <h1>There are no orders</h1>}

                </div>}
        </>
    );
}

export default Order;