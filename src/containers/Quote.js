import { useState } from 'react';

import Grid from '../components/Grid';

function Quote({ quote }) {

  const [monthlyPrice, setMonthlyPrice] = useState(quote.monthlyPrice)
  const [annualPrice, setAnnualPrice] = useState(quote.annualPrice)

  const handlePriceUpdate = (action, monthlyPrice, annualPrice) => {
    console.log('price ready to update');
    switch (action) {
      case "add":
        setMonthlyPrice(prevPrice => prevPrice + monthlyPrice);
        setAnnualPrice(prevPrice => prevPrice + annualPrice);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Grid>
        <div>
          <div>Hey {quote.firstName}</div>
          <p>Here is your quote for Royal & Sun Alliance, {quote.address1}, {quote.address2}, {quote.address3} </p>
          <p>Quote reference: {quote.quoteRef}</p>
          <p>Cover starts on {quote.startDate}</p>
        </div>

        <div>
          <div>{monthlyPrice}</div>
          <div>per month</div>
          <p>This price includes Insurance Premium Tax at the current rate. No charge for paying monthly.</p>
        </div>
      </Grid>


      <hr />
      <button onClick={() => handlePriceUpdate('add', 10, 10)}>Add 10 to price</button>
    </>
  )
}

export default Quote;
