import '../styles/order-success.css';
import React from 'react';
import uniqid from 'uniqid';
import CheckCircleIcon from '@material-ui/icons/Beenhere';

const OrderSuccess = () => {
  return (
    <div id="success">
      <div id="success-header">
        <p id="success-title">
          <CheckCircleIcon id="success-check" />
          ORDER SUCCESSFUL
        </p>
      </div>
      <p id="order-id">ORDER ID: #{uniqid().toUpperCase()}</p>
    </div>
  );
};

export default OrderSuccess;
