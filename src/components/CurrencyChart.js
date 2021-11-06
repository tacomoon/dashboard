import React from 'react'
import { Bar } from 'react-chartjs-2'

class CurrencyChart extends React.Component {
  constructor(props) {
    super(props)

    const { chartName, dataset } = this.props
    this.state = {
      chartName: chartName,
      data: {
        datasets: [
          {
            label: 'Bitcoin',
            data: dataset.bitcoin,
            backgroundColor: '#add8e6',
          },
          {
            label: 'Lightcoin',
            data: dataset.lightcoin,
            backgroundColor: '#90ee90',
          },
          {
            label: 'Exp',
            data: dataset.exp,
            backgroundColor: '#ff7f7f',
          },
          {
            type: 'line',
            label: 'USD',
            data: Object.fromEntries(
              dataset.labels
                .filter(label => dataset.bitcoin[label] && dataset.lightcoin[label] && dataset.exp[label])
                .map(label => {
                  return [label, dataset.bitcoin[label] + dataset.lightcoin[label] - dataset.exp[label]]
                }),
            ),
            borderColor: '#000000',
            backgroundColor: '#000000',
            borderDash: [10, 5],
          },
        ],
        labels: dataset.labels,
      },
    }
  }

  render() {
    console.log(this.state)

    return (
      <div id={'currency-chart'}>
        <h2 className={'ui header center aligned'}>{this.state.chartName}</h2>
        {/*<Chart data={this.state.data} options={this.state.options}/>*/}
        <Bar type={'bar'} data={this.state.data} options={this.state.options}/>
      </div>
    )
  }
}

export default CurrencyChart