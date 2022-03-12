import Grid from '../components/Grid';

function QuoteAddons({addons, showMonthlyPrice}) {
  return (
    <Grid>
    {addons.map((addon, id) => (
          <div key={id}>
          <h3>{addon.title}</h3>
          <div>
            £{showMonthlyPrice ? addon.monthlyPrice : addon.annualPrice} per month
            </div>
          <p>{addon.text}</p>
          <button>Select the extra</button>
        </div>
    )
      
    )}

  </Grid>
  )
}

export default QuoteAddons;
