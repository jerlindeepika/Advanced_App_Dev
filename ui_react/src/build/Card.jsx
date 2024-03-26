import React, { useState } from 'react';
import './Card.sass'

const base64Image = 'iVBORw0KGgoAAAANSUhEUgAAABgAAAAICAYAAADjoT9jAAAABGdBTUEAALGPC/xhBQAAAM9JREFUKBVjZKACaDsZJ/yd4ftlhv8MM5jNtdsaGBv+wIxlgjEooX8xfpcFGi4JNKPx36mrp5tOhuvDzGOsOxmezsj4XwUmQA79//9/8///GWzhehkZfzMyMLRJMwu0MtaeDP0HtB3Ipwk4wMT4n/EnTYwGGsrIyHCahYmF0frfH0ZZiixh+u/6/9//bCQzHjIzM6Y0mK7aQ5WgaToTqvv7D8MlYED/Z2RgnMXNz1NarjHvM8hCFiRbyWbyiDPc+fCMcTUDI9PMJrMVe5ENAgA1Az2KBN0ubgAAAABJRU5ErkJggg==';


const PaymentForm = () => {

    const imageUrl = `data:image/png;base64,${base64Image}`;


  // State variables for credit card information
  const [creditCardNumber, setCreditCardNumber] = useState('4542 9931 9292 2293');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  // Handler functions to update state variables
  const handleCreditCardNumberChange = (e) => {
    setCreditCardNumber(e.target.value);
  };

  const handleExpiryMonthChange = (e) => {
    setExpiryMonth(e.target.value);
  };

  const handleExpiryYearChange = (e) => {
    setExpiryYear(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleCardholderNameChange = (e) => {
    setCardholderName(e.target.value);
  };

  // Submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="payment">
        <div className="payment-tabs">
      
          <a className="active" href="javascript:void(0);">Payment</a>
        </div>
        <div className="payment-customer">
          <h2>Ivan Yew</h2>
        </div>
        <div className="payment-method">
          <h2>Choose your payment method</h2>
          <div className="pm-item">
            <input type="radio" id="mpp" name="payment-method" />
            <label htmlFor="mpp" className="pm-label">
              <div className="pm-text">
                <h5>Paypal</h5>
                <p>Safe payment online. Credit card needed. Paypal account is not necessary.</p>
              </div>
              <div className="pm-thumb">
              <img
      src='data:image/png;base64,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'
      alt='Your Image'
    />
              </div>
            </label>
          </div>
          <div className="pm-item">
            <input type="radio" id="mcc" name="payment-method" checked />
            <label htmlFor="mcc" className="pm-label">
              <div className="pm-text">
                <h5>Credit Card</h5>
                <p>Safe money transfer using your bank account. Safe payment online. Credit card needed. Visa, Maestro, Discover, American Express</p>
              </div>
              <div className="pm-thumb">
              <img
      src='data:image/png;base64,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'
      alt='Your Image'
    />              </div>
            </label>
          </div>
        </div>
        <div className="payment-input">
          <div className="form-group success">
            <label htmlFor="ccnum">Credit Card Number</label>
            <input type="text" id="ccnum" className="form-control is-valid" name="ccnum" value={creditCardNumber} onChange={handleCreditCardNumberChange} />
          </div>
          <div className="form-group half pr-3">
            <label htmlFor="ccmonth">Expiry Date</label>
            <div className="row mx-0">
              <div className="col-6 pl-0 pr-2">
                <select id="ccmonth" className="form-control" value={expiryMonth} onChange={handleExpiryMonthChange}>
                  {[...Array(12).keys()].map((month) => (
                    <option key={month + 1} value={month + 1}>{month + 1}</option>
                  ))}
                </select>
              </div>
              <div className="col-6 pl-2 pr-0">
                <select id="ccyear" className="form-control" value={expiryYear} onChange={handleExpiryYearChange}>
                  {[...Array(8).keys()].map((index) => (
                    <option key={index} value={2022 + index}>{2022 + index}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="form-group half pl-3">
            <label htmlFor="cccode">CVV Code <span className="question">?</span></label>
            <input type="text" id="cccode" className="form-control is-invalid" name="cccode" value={cvv} onChange={handleCvvChange} />
          </div>
          <div className="form-group">
            <label htmlFor="ccname">Name on Card</label>
            <input type="text" id="ccname" className="form-control" name="ccname" value={cardholderName} onChange={handleCardholderNameChange} />
          </div>
        </div>
        <div className="payment-actions">
          <a href="javascript:void(0);" className="return">Return to Shipping</a>
          <button type="submit" className="finish">
            Finish Order <img className="ml-2" src={imageUrl} alt="Finish Order" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
