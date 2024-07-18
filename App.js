import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CreditCardWidget from './CreditCardWidget';

const stripePromise = loadStripe('your-public-key-here');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CssBaseline />
      <Container maxWidth="sm">
        <CreditCardWidget />
      </Container>
    </Elements>
  );
}

export default App;
