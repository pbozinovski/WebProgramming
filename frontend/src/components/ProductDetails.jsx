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
    const override = css`
  display: block;
  margin: 0 auto;
  margin-top:100px;
`;


    return (
        <div>
            {loading ? <ClipLoader
                css={override}
                size={150}
                //size={"150px"} this also works
                color={"#123abc"}
                loading={loading}
            /> : <div style={{ margin: '40px', display: 'flex' }}>

                    <img style={{ width: '30rem', margin: '40px' }} src={`../${product.productImage}`} className="card-img-top" alt="..." />
                    <div style={{ width: '40%' }}>
                        <h5>{product.productName}</h5>
                        <p>{product.productDescription}</p>
                        <p>Brand: {product.productBrand}</p>
                        <p>Quantity of the item: {product.productQuantity}</p>
                        <p>The price of the product {product.productPrice}</p>
                        <Link to="/products" className="btn btn-primary">Go to products</Link>
                    </div>
                </div>}
            <div>
                {user ?
                    <form onSubmit={handleSumbit}>
                        <input style={{ color: '#b5b5b7', outline: 'none', width: '97%', margin: '20px', display: 'flex', background: '#252839', padding: '10px', borderRadius: '10px' }} type="text" placeholder="Leave a review for this item!" name="text"></input>
                    </form>
                    :
                    <input disabled style={{ outline: 'none', width: '97%', margin: '20px', display: 'flex', background: '#252839', padding: '10px', borderRadius: '10px' }} type="text" id="placeInput" placeholder="You need to be logged in to leave a review!"></input>
                }
            </div>
            <div>
                {loading ? <ClipLoader
                css={override}
                size={150}
                //size={"150px"} this also works
                color={"#123abc"}
                loading={loading}
            /> : reviews.map(review => (

                    <div key={review.reviewId}>
                        <div style={{ margin: '20px', display: 'flex', background: '#252839', padding: '10px', borderRadius: '10px' }}>
                            <div style={{ color: '#252839', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', background: '#f2b632' }}>
                                <div style={{ margin: '0', fontSize: '2rem', fontWeight: '500' }}>{review.firstName?.substr(0, 1).toUpperCase() + review.lastName?.substr(0, 1).toUpperCase()}</div>
                            </div>
                            <div style={{ fontSize: '20px', color: '#b5b5b7', display: 'flex', flexDirection: 'column', marginLeft: '20px', marginBottom: '10px' }}>
                <div style={{ color: '#f2b632' }}>{review.firstName}  {review.lastName} </div><small>{"Posted on " + review.reviewDate.substr(0, 15) + " at " + review.reviewDate.substr(16, 5)}</small>
                                <div> {review.reviewText}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default ProductDetails;