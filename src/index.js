import React from 'react'
import ReactDOM from 'react-dom'
import ContainerDashboard from './components/ContainerDashboard'

const mainDashboardData = {
  hardwarePieChart: {
    chartName: 'Оборудование',
    dataset: { 'L3+': 5, 'WM': 6, 'S9': 1 },
  },
  incomePieChart: {
    chartName: 'Структура доходов',
    dataset: { 'L3+': 3, 'WM': 8, 'S9': 1 },
  },
  currenciesTable: {
    currencies: [
      { name: 'LW', bitcoin: 12.256, lightcoin: 35.961, exp: 0.01 },
      { name: 'LM', bitcoin: 87.2, lightcoin: 52.572, exp: 0.01 },
      { name: 'YTD', bitcoin: 3.532, lightcoin: 61.7829, exp: 0.01 },
    ],
    all: {
      bitcoin: 3.123, lightcoin: 4.567, usd: 72.01,
    },
  },
  hardwareTable: {
    hardware: [
      { name: 'L3+', all: 12, v: 3, x: 76, sale: 14, buy: 3, avs: 9.561, avb: 4.199 },
      { name: 'WM', all: 102, v: 34, x: 67, sale: 2, buy: 8, avs: 3.15, avb: 5.12 },
      { name: 'S/T17', all: 23, v: 11, x: 7, sale: 8, buy: 0, avs: 8.35, avb: 1.82 },
    ],
  },
  boardRepairmentTable: {
    repairment: [
      { name: 'LW', taken: 12, repaired: 10 },
      { name: 'LM', taken: 3, repaired: 0 },
    ],
  },
  manufacturingTable: {
    manufacturing: [
      { name: 'LW', pieces: 5, usd: 45.499 },
      { name: 'LM', pieces: 3, usd: 23.2 },
      { name: 'Total', pieces: 8, usd: 68.7 },
    ],
  },
  totalStatsTable: {
    stats: [
      { name: 'Контейнеров', max: 12, fact: 7 },
      { name: 'МВт', max: 674.3, fact: 859.3 },
      { name: 'сотрудников', max: 32, fact: 32 },
      { name: '$', max: 3489.339, fact: 2554.1 },
    ],
  },
  planFactChart: {
    chartName: 'THs (plan/fact) L6W',
    dataset: {
      labels: Array(6).fill(-6).map((value, index) => value + index),
      plan: [{ x: -6, y: 3 }, { x: -2, y: 1 }],
      fact: [{ x: -6, y: 2 }, { x: -2, y: 3 }, { x: -1, y: 1.4 }],
    },
  },
  currencyChart: {
    chartName: 'Last 6 week ($)',
    dataset: {
      labels: Array(6).fill(-6).map((value, index) => (value + index).toString()),
      bitcoin: { '-6': 3, '-2': 4 },
      lightcoin: { '-6': 7, '-3': 3, '-2': 3 },
      exp: { '-6': 1.4, '-2': 2.8 },
    },
  },
}

const containerDashboardData = {
  containerStatsTable: {
    stats: [
      { name: 'now', ths: 12, percentage: 73, lightcoin: null, power: 'LD', totalExp: null, usd: undefined },
      { name: 'max', ths: 9, percentage: 100, lightcoin: undefined, power: 40, totalExp: undefined, usd: null },
      { name: 'LW', ths: "Av", percentage: 62, lightcoin: 72, power: 682, totalExp: 182, usd: 6712.122 },
      { name: 'LSWw', ths: "Av", percentage: 45, lightcoin: 23, power: 91, totalExp: 723, usd: 73.14 },
      { name: 'YTD', ths: "Av", percentage: 81, lightcoin: 52, power: 341, totalExp: 41, usd: 347.1 },
      { name: 'Total', ths: "Av", percentage: 50, lightcoin: 52, power: 461, totalExp: 723, usd: 23.1 },
    ],
  },
}

ReactDOM.render(
  <div>
    <ContainerDashboard data={containerDashboardData}/>
  </div>,
  document.getElementById('root'),
)