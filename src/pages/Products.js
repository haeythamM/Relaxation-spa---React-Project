import React, { useState } from 'react';
import styled from 'styled-components';

const Products = () => {
  const [cart, setCart] = useState({});

  const ProductsData = [
    { id: 1, name: 'Products 1', description: 'body oil', price: 10, img: require('../assets/img/BodyOil.jpeg') },
    { id: 2, name: 'Products 2', description: 'gel cleanser', price: 20, img: require('../assets/img/gelcleanser.jpg') },
    { id: 3, name: 'Products 3', description: 'Bush balm The Body Rock', price: 30, img: require('../assets/img/BushbalmTheBodyRock.jpg') },
    { id: 4, name: 'Products 4', description: 'PURE Soap', price: 40, img: require('../assets/img/soap.jpg') }
  ];

  const addToCart = (product) => {
    const updatedCart = { ...cart };
    if (updatedCart[product.id]) {
      updatedCart[product.id].quantity += 1;
    } else {
      updatedCart[product.id] = { ...product, quantity: 1 };
    }
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = { ...cart };
    if (updatedCart[productId]) {
      if (updatedCart[productId].quantity === 1) {
        delete updatedCart[productId];
      } else {
        updatedCart[productId].quantity -= 1;
      }
      setCart(updatedCart);
    }
  };

  const totalPrice = Object.values(cart).reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);


  const ClickableImage = styled.img`
    cursor: pointer;
  `;


  return (
    <Container>
      <h1 className="mt-5 mb-4">Products</h1>
      <Row>
        {ProductsData.map(product => (
          <ProductCard key={product.id}>
            <div className="image-button" onClick={() => addToCart(product)}>
              <ClickableImage src={product.img} alt={product.name} className="card-img-top" />
            </div>
            <div className="card-header bg-black border-bottom-0">
              {product.name}
            </div>
            <div className="card-body">
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price: ${product.price}</p>
              <button onClick={() => removeFromCart(product.id)} className="btn btn-danger">Remove</button>
            </div>
          </ProductCard>
        ))}
      </Row>
      <div className="mt-4">
        <h4>Cart</h4>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {Object.values(cart).map(item => (
            <li key={item.id}>{item.name} - Quantity: {item.quantity}</li>
          ))}
        </ul>
        <p>Total Price (including taxes) : ${totalPrice}</p>
      </div>
    </Container>
  );
};


const Container = styled.div`
  color: white;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  width: 23%;
  margin: 0 1%;
  margin-bottom: 20px;
  .image-button {
    cursor: pointer;
  }
`;

export default Products;
