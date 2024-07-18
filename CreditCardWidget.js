import React, { useState } from 'react';
import { TextField, Grid, Button, MenuItem } from '@mui/material';
import './CreditCard.css';

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('US');

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(value);
  };

  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = `${value.substring(0, 2)}/${value.substring(2, 4)}`;
    }
    setExpiryDate(value);
  };

  return (
    <div className="credit-card">
      <div className="credit-card__front">
        <div className="credit-card__logo">VISA</div>
        <div className="credit-card__number">{cardNumber || '•••• •••• •••• ••••'}</div>
        <div className="credit-card__name">{name || 'Your Name'}</div>
        <div className="credit-card__expiry">{expiryDate || 'MM/YY'}</div>
      </div>
      <div className="credit-card__back">
        <div className="credit-card__cvv">{cvv || '•••'}</div>
      </div>
      <form className="credit-card__form">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Card Number"
              value={cardNumber}
              onChange={handleCardNumberChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Expiry Date (MM/YY)"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="CVV"
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              select
              fullWidth
            >
              <MenuItem value="US">United States</MenuItem>
              <MenuItem value="CA">Canada</MenuItem>
              <MenuItem value="GB">United Kingdom</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreditCard;
