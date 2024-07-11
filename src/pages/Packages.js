import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.color || 'transparent'};
  color: ${props => props.textColor || 'black'};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const Packages = () => {
  const [cart, setCart] = useState({});

  const Packages = [
    { id: 1, name: 'Package 1', description: 'TOTAL BLITZ :90 MIN THERAPEUTIC WATERS + 60 MIN REPLENISHING FACIAL + 60 MIN BODY TREATMENT', price: 355 },
    { id: 2, name: 'Package 2', description: 'SIMPLY BLITZ : 90 MIN THERAPEUTIC WATERS + 25 MIN SAMPLER OR HAIR RESCUE + 60 MIN MASSAGE', price: 275 },
    { id: 3, name: 'Package 3', description: 'DOUBLE THE BLITZ : 90 MIN THERAPEUTIC WATERS + 60 MIN FACE OR BODY TREATMENT', price: 30 }
  ];

  const addToCart = (Package) => {
    const updatedCart = { ...cart };
    if (updatedCart[Package.id]) {
      updatedCart[Package.id].quantity += 1;
    } else {
      updatedCart[Package.id] = { ...Package, quantity: 1 };
    }
    setCart(updatedCart);
  };
  
  const removeFromCart = (PackageId) => {
    const updatedCart = { ...cart };
    if (updatedCart[PackageId]) {
      if (updatedCart[PackageId].quantity === 1) {
        delete updatedCart[PackageId];
      } else {
        updatedCart[PackageId].quantity -= 1;
      }
      setCart(updatedCart);
    }
  };

  const totalPrice = Object.values(cart).reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  const totalWithTaxes = totalPrice * 1.13; // Add 13% taxes

  return (
    <Container className="container">
      <h1 className="mt-5 mb-4">Packages</h1>
      <div className="row">
        {Packages.map(Package => (
          <div key={Package.id} className="col-md-4 mb-4">
            <Card className="card rounded">
              <CardHeader className="card-header bg-white border-bottom-0">
                {Package.name}
              </CardHeader>
              <div className="card-body">
                <CardText>{Package.description}</CardText>
                <CardText>Price: ${Package.price}</CardText>
                <div className="btn-group" role="group">
                  <Button onClick={() => addToCart(Package)} color="#28a745">Add</Button>
                  <Button onClick={() => removeFromCart(Package.id)} color="#dc3545">Remove</Button>
                </div>
              </div>
            </Card>
          </div>
        )).slice(0, 3)}
      </div>
      <div className="mt-4">
        <h4>Cart</h4>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {Object.values(cart).map(item => (
            <li key={item.id}>{item.name} - Quantity: {item.quantity}</li>
          ))}
        </ul>
        <p>Total Price (including taxes): ${totalWithTaxes.toFixed(2)}</p>
      </div>
    </Container>
  );
};

export default Packages;

const Container = styled.div`
  color: white;
`;

const Card = styled.div`
  background-color: #FDE5A9;
  border-radius: 0.25rem;
`;

const CardHeader = styled.div`
  background-color: #D81921;
  
  border-bottom: none;
`;

const CardText = styled.p`
  color: black;
`;
