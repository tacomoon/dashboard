import React from 'react'
import { Pie } from 'react-chartjs-2'

const DEFAULT_COLORS = ['#add8e6', '#90ee90', '#ff7f7f']

function generateColor() {
  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
}

class PieChart extends React.Component {
  constructor(props) {
    super(props)

    console.log(props.dataset)

    this.state = {
      chartName: props.chartName,
      data: {
        labels: Object.keys(props.dataset),
        datasets: [
          {
            backgroundColor: Object.keys(props.dataset)
              .map((_, index) => {
                if (index < DEFAULT_COLORS.length) {
                  return DEFAULT_COLORS[index]
                } else {
                  return generateColor()
                }
              }),
            data: Object.values(props.dataset),
          },
        ],
      },
    }
  }

  render() {
    return (
      <div>
        <h2 className={'ui header center aligned'}>{this.state.chartName}</h2>
        <Pie type={'pie'} data={this.state.data}/>
      </div>
    )
  }
}

export default PieChart