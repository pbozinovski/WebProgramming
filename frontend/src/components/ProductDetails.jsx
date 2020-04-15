import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";


const ProductDetails = ({ addReview, user }) => {

    const [product, setProduct] = useState({
        productId: null,
        productName: null,
        productQuantity: null,
        productPrice: null,
        productBrand: '',
        productDescription: '',
        productType: '',
        productImage: '',
        reviews: [
            {
                reviewId: null,
                reviewText: null,
                reviewDate: '1584745200000',
                firstName: null,
                lastName: null
            }

        ]
    });
    console.log(product);
    const [reviews, setReviews] = useState([{
        reviewId: null,
        reviewText: null,
        reviewDate: '1584745200000',
        firstName: null,
        lastName: null
    }]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();


    useEffect(() => {
        axios.get(`http://localhost:8080/api/products/${id}`).then(response => {
            setReviews(response.data.reviews);
            setProduct(response.data);
            setLoading(false);
            console.log('called from products')
        })
    }, [id]);

    console.log(reviews);

    const handleSumbit = e => {
        e.preventDefault();
        if (e.target.text.value !== '') {

            const review = {
                id: Math.floor(Math.random() * 100000),
                text: e.target.text.value,
                product: id,
                date: Date(Date.now()),
                client: user.clientId
            }

            addReview(review);
            setReviews([...reviews, {
                reviewId: review.id,
                reviewText: review.text,
                reviewDate: Date(Date.now()),
                firstName: user.clientFirstname,
                lastName: user.clientLastname

            }]);
            e.target.text.value = '';
        }
    }
    const override = css`
  display: block;
  margin: 0 auto;
  margin-top:100px;
`;


    return (
        <div style={{ padding: '20px' }}>

            {loading ? <ClipLoader
                css={override}
                size={150}
                //size={"150px"} this also works
                color={"#123abc"}
                loading={loading}
            /> : <div style={{ margin: '40px', display: 'flex' }}>

                    <img style={{ width: '30rem', margin: '0 40px 40px 40px' }} src={`../${product.productImage}`} className="card-img-top" alt="..." />
                    <div style={{ width: '40%' }}>
                        <h5>{product.productName}</h5>
                        <p>{product.productDescription}</p>
                        <p>Brand: {product.productBrand}</p>
                        <p>Quantity of the item: {product.productQuantity}</p>
                        <p>The price of the product: {product.productPrice.toString().substr(0, 2) + ',' + product.productPrice.toString().substr(2, 3) + " den"}</p>
                        <Link to="/products" className="btn btn-info">Go to products</Link>
                    </div>
                </div>}
            <div>

                <div style={{ background: "#e6e6e6", padding: "5px", borderRadius: '0.6%' }}>
                    <h2 style={{ margin: '20px', color: '#4a4a4a' }}>Reviews</h2>
                    {loading ? <ClipLoader
                        css={override}
                        size={150}
                        //size={"150px"} this also works
                        color={"#123abc"}
                        loading={loading}
                    /> : reviews.map(review => (

                        <div key={review.reviewId}>
                            <div style={{ margin: '20px', display: 'flex', alignItems: 'center', background: '#f0f0f0', padding: '10px', border: '1px solid #d6d6d6', borderRadius: '10px' }}>
                                <div style={{ color: '#4689a6', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', background: '#9ad3de' }}>
                                    <div style={{ margin: '0', fontSize: '2rem', fontWeight: '500' }}>{review.firstName?.substr(0, 1).toUpperCase() + review.lastName?.substr(0, 1).toUpperCase()}</div>
                                </div>
                                <div style={{ fontSize: '20px', color: '#3d3d3d', display: 'flex', flexDirection: 'column', marginLeft: '20px', marginBottom: '10px' }}>
                                    <div style={{ color: '#216b8a', fontSize: '24px' }}>{review.firstName}  {review.lastName} </div><small style={{ color: '#4689a6' }}>{"Posted on " + review.reviewDate.substr(0, 15) + " at " + review.reviewDate.substr(16, 5)}</small>
                                    <div> {review.reviewText}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="input-group">
                        {user ?
                            <form style={{ width: '100%' }} onSubmit={handleSumbit}>
                                <div className="input-group">
                                    <input maxlength="100" className="form-control" style={{ background: '#f7f7f7', margin: '0 20px 20px 20px', padding: '25px' }} type="text" placeholder="Leave a review for this item!" name="text"></input>
                                </div>
                            </form>
                            :
                            <input disabled className="form-control" style={{ margin: '0 20px 20px 20px', background: '#f7f7f7', padding: '25px' }} type="text" id="placeInput" placeholder="You need to be logged in to leave a review!"></input>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductDetails;