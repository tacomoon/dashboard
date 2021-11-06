import React from 'react'
import { Bar } from 'react-chartjs-2'

class PlanFactChart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chartName: props.chartName,
      data: {
        datasets: [
          {
            label: 'plan',
            data: this.props.dataset.plan,
            backgroundColor: '#add8e6',
          },
          {
            label: 'fact',
            data: this.props.dataset.fact,
            backgroundColor: '#90ee90',
          },
        ],
        labels: this.props.dataset.labels,
      },
      options: {
        scales: {
          xAxis: { stacked: true },
          yAxis: { stacked: true },
        },
      },
    }
  }

  render() {
    return (
      <div id={'plan-fact-chart'}>
        <h2 className={'ui header center aligned'}>{this.state.chartName}</h2>
        <Bar type={'bar'} data={this.state.data} options={this.state.options}/>
      </div>
    )
  }
}

export default PlanFactChart