import React, { useState, useEffect } from 'react';
import classes from '../modules/Register.module.scss';
import Card from './Card';

export default function Register() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvc, setCvc] = useState('');

  const [errors, setErrors] = useState({
    cardNumber: '',
    cardHolderName: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  });

  useEffect(() => {
    const updatedErrors = { ...errors };

    if (cardHolderName) updatedErrors.cardHolderName = '';
    if (cardNumber) updatedErrors.cardNumber = '';
    if (expMonth) updatedErrors.expMonth = '';
    if (expYear) updatedErrors.expYear = '';
    if (cvc) updatedErrors.cvc = '';

    setErrors(updatedErrors);
  }, [cardHolderName, cardNumber, expMonth, expYear, cvc]);

  const validate = () => {
    let valid = true;
    const newErrors = {
      cardNumber: '',
      cardHolderName: '',
      expMonth: '',
      expYear: '',
      cvc: ''
    };

    if (!cardHolderName) {
      newErrors.cardHolderName = 'Cant be blank';
      valid = false;
    }

    if (!cardNumber) {
      newErrors.cardNumber = 'Cant be blank';
      valid = false;
    } else if (/[^\d\s]/.test(cardNumber)) {
      newErrors.cardNumber = 'Wrong format, numbers only';
      valid = false;
    }

    if (!expMonth) {
      newErrors.expMonth = 'Cant be blank';
      valid = false;
    } else if (!/^\d{2}$/.test(expMonth)) {
      newErrors.expMonth = 'Invalid month';
      valid = false;
    }

    if (!expYear) {
      newErrors.expYear = 'Cant be blank';
      valid = false;
    } else if (!/^\d{2}$/.test(expYear)) {
      newErrors.expYear = 'Invalid year';
      valid = false;
    }

    if (!cvc) {
      newErrors.cvc = 'Cant be blank';
      valid = false;
    } else if (!/^\d{3}$/.test(cvc)) {
      newErrors.cvc = 'Invalid CVC';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Reset form fields and errors
      setCardNumber('');
      setCardHolderName('');
      setExpMonth('');
      setExpYear('');
      setCvc('');
      setErrors({
        cardNumber: '',
        cardHolderName: '',
        expMonth: '',
        expYear: '',
        cvc: ''
      });
      // Optionally, you can add a message or redirect here
      console.log('Form submitted successfully');
    }
  };

  return (
    <div className={classes['register-wrapper']}>
      <Card 
        cardNumber={cardNumber} 
        cardHolderName={cardHolderName} 
        expMonth={expMonth} 
        expYear={expYear} 
        cvc={cvc} 
      />
      <div className={classes['form-container']}>
        <h2>CARDHOLDER NAME</h2>
        <input
          className={`${classes['name-input']} ${errors.cardHolderName ? classes['error-border'] : ''}`}
          type="text"
          placeholder="e.g Jane Appiessed"
          value={cardHolderName}
          onChange={(e) => setCardHolderName(e.target.value)}
        />
        {errors.cardHolderName && <div className={classes['error-message']}>{errors.cardHolderName}</div>}
        
        <h2>CARD NUMBER</h2>
        <input
          className={`${classes['number-input']} ${errors.cardNumber ? classes['error-border'] : ''}`}
          type="text"
          placeholder="e.g 1234 5678 9123 0000"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        {errors.cardNumber && <div className={classes['error-message']}>{errors.cardNumber}</div>}
        
        <h2>EXP. DATE (MM/YY) & CVC</h2>
        <div className={classes['exp-date-cvc-inputs']}>
          <div>
            <input
              className={`${classes['exp-input']} ${errors.expMonth ? classes['error-border'] : ''}`}
              type="text"
              placeholder="MM"
              value={expMonth}
              onChange={(e) => setExpMonth(e.target.value)}
              maxLength={2}
            />
            {errors.expMonth && <div className={classes['error-message-inline']}>{errors.expMonth}</div>}
          </div>
          <div>
            <input
              className={`${classes['exp-input']} ${errors.expYear ? classes['error-border'] : ''}`}
              type="text"
              placeholder="YY"
              value={expYear}
              onChange={(e) => setExpYear(e.target.value)}
              maxLength={2}
            />
            {errors.expYear && <div className={classes['error-message-inline']}>{errors.expYear}</div>}
          </div>
          <div>
            <input
              className={`${classes['cvc-input']} ${errors.cvc ? classes['error-border'] : ''}`}
              type="text"
              placeholder="e.g. 123"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              maxLength={3}
            />
            {errors.cvc && <div className={classes['error-message-inline']}>{errors.cvc}</div>}
          </div>
        </div>
        
        <br />
        <button onClick={handleSubmit}>Confirm</button>
      </div>
    </div>
  );
}
