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

function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log('Location state:', location.state); // Debugging line
    if (location.state?.cart) {
      console.log('Cart from location state:', location.state.cart); // Debugging line
      setCart(location.state.cart);
    } else {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        console.log('Cart from local storage:', JSON.parse(savedCart)); // Debugging line
        setCart(JSON.parse(savedCart));
      } else {
        console.log('No cart found in location state or local storage'); // Debugging line
      }
    }
  }, [location.state]);

  const totalAmount = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  const handlePayment = () => {
    alert('Proceeding to payment...');
  };

  return (
    <Container>
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
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

export default CheckoutPage;
