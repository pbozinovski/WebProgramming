import React from 'react';
import ProductItem from './ProductItem'
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const Products = ({ products, addToCart, loading, user }) => {


    const override = css`
  display: block;
  margin: 0 auto;
  margin-top:100px;
`;

    return (

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', justifyItems: 'center' }}>
            {loading ? <ClipLoader
                css={override}
                size={150}
                //size={"150px"} this also works
                color={"#123abc"}
                loading={loading}
            /> : products.map(product => (
                <ProductItem

                    key={product.productId}
                    product={product}
                    addToCart={addToCart}
                    user={user}
                />
            ))}

        </div>
    );
}

export default Products;