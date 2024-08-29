import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for UI
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 21px;
`;

const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const Total = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 20px;
  text-align: right;
`;

const CheckoutButton = styled.button`
  background-color: #ff5c52;
  color: white;
  font-size: 20px;
  padding: 10px 30px;
  border-radius: 18px;
  border: none;
  cursor: pointer;
  font-family: Trebuchet MS;
  font-weight: 800;
  margin-top: 20px;
  width: 100%;

  &:hover {
    background-color: #ff8452;
  }
`;

const ContinueShoppingButton = styled.button`
  background-color: #008CBA;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 18px;
  border: none;
  cursor: pointer;
  font-family: Trebuchet MS;
  font-weight: 600;
  margin-top: 20px;
  width: 100%;

  &:hover {
    background-color: #005f7a;
  }
`;

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Try to get the cart from location state or fallback to localStorage
    if (location.state?.cart) {
      setCart(location.state.cart);
    } else {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, [location.state]);

  // Calculate the total amount in the cart
  const totalAmount = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  // Handle payment action
  const handlePayment = () => {
    alert('Proceeding to payment...');
    // Add payment logic here
  };

  return (
    <Container>
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <ContinueShoppingButton onClick={() => navigate('/')}>
            Continue Shopping
          </ContinueShoppingButton>
        </>
      ) : (
        <>
          <ItemList>
            {cart.map((item, index) => (
              <Item key={index}>
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </Item>
            ))}
          </ItemList>
          <Total>Total: ${totalAmount}</Total>
          <CheckoutButton onClick={handlePayment}>Proceed to Payment</CheckoutButton>
        </>
      )}
    </Container>
  );
}

export default Checkout;
