import React from 'react';
import AdminProducts from './AdminProducts';

const AdminPage = ({products, remove, update, add}) => {

    return (
        <AdminProducts products={products} remove={remove} update={update} add={add}></AdminProducts>
    )
}

export default AdminPage;