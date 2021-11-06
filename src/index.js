import React from 'react'
import ReactDOM from 'react-dom'
import CurrencyDashboard from './components/CurrencyDashboard'

const data = {
  currenciesDashboard: {
    currencies: [
      { name: 'LW', bitcoin: 12.256, lightcoin: 35.961, exp: 0.01 },
      { name: 'LM', bitcoin: 87.2, lightcoin: 52.572, exp: 0.01 },
      { name: 'YTD', bitcoin: 3.532, lightcoin: 61.7829, exp: 0.01 },
    ],
    all: {
      bitcoin: 3.123, lightcoin: 4.567, usd: 72.01,
    },
  },
}

ReactDOM.render(
  <div>
    <CurrencyDashboard data={data.currenciesDashboard}/>
  </div>,
  document.getElementById('root'),
)