import React from 'react'
import ReactDOM from 'react-dom'
import CurrencyDashboard from './components/CurrencyDashboard'
import PlanFactChart from './components/PlanFactChart'

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
  planFactChart: {
    name: 'THs (plan/fact) L6W',
    dataset: {
      labels: Array(6).fill(-6).map((value, index) => value + index),
      plan: [{ x: -6, y: 3 }, { x: -2, y: 1 }],
      fact: [{ x: -6, y: 2 }, { x: -2, y: 3 }, { x: -1, y: 1.4 }],
    },
  },
}

ReactDOM.render(
  <div>
    <CurrencyDashboard data={data.currenciesDashboard}/>
    <PlanFactChart name={data.planFactChart.name} dataset={data.planFactChart.dataset}/>
  </div>,
  document.getElementById('root'),
)