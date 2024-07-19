import React from 'react';
import classes from '../modules/Card.module.scss';
import Front from '../assets/images/bg-card-front.png';
import Back from '../assets/images/bg-card-back.png';
import CardLogo from '../assets/images/card-logo.svg';

export default function Card({ cardNumber, cardHolderName, expMonth, expYear, cvc }) {
  return (
    <div className={classes['card-wrapper']}>
      <div className={classes['front-card']}>
        <img src={CardLogo} alt="Card Logo" />
        <div>
          <h1>{cardNumber || "0000 0000 0000 0000"}</h1>
        </div>
        <div className={classes['secondary-title']}>
          <h3 className={classes['first-sec']}>{cardHolderName || "Jane Appiessed"}</h3>
        </div>
        <div className={classes['secondary-title2']}>
          <h3>{`${expMonth || "MM"}/${expYear || "YY"}`}</h3>
        </div>
      </div>
      <div className={classes['back-card']}>
        <img src={Back} alt="Back of Card" />
        <h1>{cvc || "000"}</h1>
      </div>
    </div>
  );
}
