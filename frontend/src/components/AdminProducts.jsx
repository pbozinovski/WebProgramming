import React, { useState } from 'react';
import axios from 'axios';
const AdminProducts = ({ products, remove, update, add }) => {

    const [items, setItems] = useState({
        productId: Math.floor(Math.random() * 1000000000),
        productName: '',
        productQuantity: '',
        productPrice: '',
        productBrand: '',
        productDescription: '',
        productType: '',
        productImage: ''
    });

    const [edit, setEdit] = useState(false);

    const handleChange = e => {
        setItems({ ...items, [e.target.name]: e.target.value });
        console.log(items.productName);
    };

    const handleEdit = id => {
        axios.get(`http://localhost:8080/api/products/${id}`).then(response => {
            setItems(response.data);
            setEdit(true);
            console.log(items);
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (items.productName === '' || items.productQuantity === '' || items.productPrice === '' ||
            items.productBrand === '' || items.productDescription === '' || items.productType === '' ||
            items.productImage === '') {
            alert("All fields must be filled!")
        } else {
            if (edit) {
                update(items);
            } else {
                add(items);
            }
            setItems({
                productName: '',
                productQuantity: '',
                productPrice: '',
                productBrand: '',
                productDescription: '',
                productType: '',
                productImage: ''
            });
        }

    }
    return (
        <div className="container mt-4">

            <h4 className="text-upper text-left">ADD Products</h4>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Enter name:</label>
                    <input onChange={handleChange} type="text" className="form-control" value={items.productName} name="productName" id="name"></input>
                    <label htmlFor="quantity">Enter quantity:</label>
                    <input onChange={handleChange} type="text" className="form-control" value={items.productQuantity} name="productQuantity" id="quantity"></input>
                    <label htmlFor="price">Enter price:</label>
                    <input onChange={handleChange} type="text" className="form-control" value={items.productPrice} name="productPrice" id="price"></input>
                    <label htmlFor="brand">Enter brand:</label>
                    <input onChange={handleChange} type="text" className="form-control" value={items.productBrand} name="productBrand" id="brand"></input>
                    <label htmlFor="description">Enter description:</label>
                    <input onChange={handleChange} type="text" className="form-control" value={items.productDescription} name="productDescription" id="description"></input>
                    <label htmlFor="type">Enter type:</label>
                    <input onChange={handleChange} type="text" className="form-control" value={items.productType} name="productType" id="type"></input>
                    <label htmlFor="image">Enter image:</label>
                    <input onChange={handleChange} placeholder="ex: ../images/imgMB.png" type="text" className="form-control" value={items.productImage} name="productImage" id="image"></input>
                </div>


                {edit ? <button onClick={() => handleSubmit} className="btn btn-secondary btn-block">Edit Product</button> : <button onClick={() => handleSubmit} className="btn btn-secondary btn-block">Add Product</button>}
            </form>

            <h4 className="text-upper text-left">ADMIN Products</h4>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Product id</th>
                        <th scope="col">Product name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Type</th>
                        <th scope="col">Image</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(i => {
                        return (
                            <tr key={i.productId}>
                                <td>{i.productId}</td>
                                <td>{i.productName}</td>
                                <td>{i.productQuantity}</td>
                                <td>{i.productPrice}</td>
                                <td>{i.productBrand}</td>
                                <td>{i.productType}</td>
                                <td>{i.productImage}</td>
                                <td>
                                    <button onClick={() => { remove(i.productId) }} className="btn btn-block btn-outline-danger ml-3">
                                        <span className="fa fa-remove" />
                                        <span>
                                            <strong>Remove</strong>
                                        </span>
                                    </button>

                                    <a href="#top" onClick={() => handleEdit(i.productId)} className="btn btn-block btn-outline-success ml-3">
                                        <span className="fa fa-edit" />
                                        <span>
                                            <strong>Update</strong>
                                        </span>
                                    </a>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </div>
    )
};

export default AdminProducts;