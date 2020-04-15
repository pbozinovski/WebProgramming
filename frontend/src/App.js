import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import axios from 'axios';
import qs from 'qs';
import { Switch, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import AdminPage from './components/AdminPage';
import ProtectedRoute from './components/ProtectedRoute';
import AccessDenied from './components/AccessDenied';
import Order from './components/Order';


function App() {

  //STATES
  const [products, setProducts] = useState([{
    productId: null,
    productName: '',
    productQuantity: null,
    productPrice: null,
    productBrand: '',
    productDescription: '',
    productType: '',
    productImage: ''
  }]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);
  const [admin, setAdmin] = useState(false);

  //GETTING USER FROM LOCAL STORAGE
  var data = localStorage.getItem('user');
  var user = JSON.parse(data);


  //LOGIN USER
  const login = () => {
    setAuth(true);
    if (admin.clientType === "admin") {
      setAdmin(true);
    }
  }
  //LOGOUT USER
  const logout = () => {
    setAuth(false);
    setAdmin(false);
    setCartItems([]);
    localStorage.clear();
  }
  //ADD TO CART
  const addToCart = (id) => {
    //ne dozvoluvaj duplikati vo cart
    const items = cartItems.filter(i => i.productId !== id);
    axios.get(`http://localhost:8080/api/products/${id}`).then(response => {
      setCartItems([...items,
      {
        productId: response.data.productId,
        productName: response.data.productName,
        productQuantity: response.data.productQuantity,
        productPrice: response.data.productPrice,
        productBrand: response.data.productBrand,
        productDescription: response.data.productDescription,
        productType: response.data.productType,
        productImage: response.data.productImage
      }]);
    })

  };

  //REMOVE ITEM FROM CART
  const removeItem = (id) => {
    const items = cartItems.filter(i => i.productId !== id);
    setCartItems(items);
  }

  //REMOVE PRODUCT FROM DB
  const remove = (id) => {
    if (window.confirm("Are you sure?")) {
      axios.delete(`http://localhost:8080/api/products/${id}`);
      const items = products.filter(i => i.productId !== id);
      setProducts(items);
    }
  }
  //UPDATE PRODUCT
  const updateProduct = (product) => {
    const newProduct = { name: product.productName, quantity: product.productQuantity, price: product.productPrice, brand: product.productBrand, description: product.productDescription, type: product.productType, image: product.productImage }
    const newProduct2 = { productId: product.productId, productName: product.productName, productQuantity: product.productQuantity, productPrice: product.productPrice, productBrand: product.productBrand, productDescription: product.productDescription, productType: product.productType, productImage: product.productImage }
    setProducts(products.map(i => i.productId === newProduct2.productId ? newProduct2 : i));
    const newdata = qs.stringify(newProduct);
    const id = product.productId;
    axios.patch(`http://localhost:8080/api/products/${id}`, newdata, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    console.log(products);
  }

  const addProduct = (product) => {
    const newProduct = { id: product.productId, name: product.productName, quantity: product.productQuantity, price: product.productPrice, brand: product.productBrand, description: product.productDescription, type: product.productType, image: product.productImage };
    const newProduct2 = { productId: product.productId, productName: product.productName, productQuantity: product.productQuantity, productPrice: product.productPrice, productBrand: product.productBrand, productDescription: product.productDescription, productType: product.productType, productImage: product.productImage }
    setProducts([...products, newProduct2]);
    const newdata = qs.stringify(newProduct);
    const id = product.productId;
    console.log(id);
    axios.post(`http://localhost:8080/api/products`, newdata, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    console.log(products);
  }
  console.log(products);
  //BUY ALL ITEMS FROM CART
  const buyItems = (price) => {

    const data = {id: Math.floor(Math.random() * 100000), price: price};
    const newdata = qs.stringify(data);
    axios.post(`http://localhost:8080/api/payments`, newdata, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    const newData = {paymentId: data.id, paymentPrice: data.price};
    //const newProduct = { id: cartItems.productId, name: cartItems.productName, quantity: cartItems.productQuantity, price: cartItems.productPrice, brand: cartItems.productBrand, description: cartItems.productDescription, type: cartItems.productType, image: cartItems.productImage};
    const newProduct = { orderId: Math.floor(Math.random() * 100000), orderDate: Date(Date.now()), products: cartItems, client: user, payment: newData}
    //const newdata = qs.stringify(newProduct);
    axios.post(`http://localhost:8080/api/orders`, newProduct, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    
    console.log(cartItems);
    setCartItems([]);
  }

  //REGISTER CLIENT
  const addClient = (client) => {
    const newdata = qs.stringify(client);
    axios.post(`http://localhost:8080/api/clients`, newdata, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }

  //ADD REVIEW FROM PRODUCT DETAILS
  const addReview = (review) => {
    const newdata = qs.stringify(review);
    axios.post(`http://localhost:8080/api/reviews`, newdata, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }
  // FETCH PRODUCTS FROM DB
  useEffect(() => {
    axios.get("http://localhost:8080/api/products/allDTO").then(response => {
      setProducts(response.data);
      setLoading(false);
      console.log("Data called!");
    });
  }, []);

  // LOAD USER INFO FROM LOCAL STORAGE
  useEffect(() => {
    if (user === null) {
      setAuth(false);
      setAdmin(false);
    } else {
      if (user.clientType === "admin") {
        setAdmin(true);
      }
      setAuth(true);
    }
    console.log("test");
  }, [admin, user])

  return (
    
      <div className="App">
        <Header logout={logout} admin={admin} auth={auth} length={cartItems.length} />
        <Switch>
          <ProtectedRoute path="/admin" products={products} remove={remove} update={updateProduct} add={addProduct} admin={admin} component={AdminPage}></ProtectedRoute>
          <Route path="/" exact><Home user={user} addReview={addReview} /></Route>
          <Route path="/products" exact><Products products={products} user={user} addToCart={addToCart} loading={loading} /></Route>
          <Route path="/cart"><Cart items={cartItems} removeItem={removeItem} buyItems={buyItems} /></Route>
          <Route path="/login"><Login login={login}></Login></Route>
          <Route path="/register"><Register addClient={addClient}></Register></Route>
          <Route path="/products/:id/details"><ProductDetails addReview={addReview} user={user} /></Route>
          <Route path="/orders"><Order user={user} /></Route>

          <Route path="/forbid"><AccessDenied></AccessDenied></Route>
          <Route><Home /></Route>
        </Switch>
      </div>

  );
}

export default App;
