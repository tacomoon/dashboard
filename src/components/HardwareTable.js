import React from 'react'

class HardwareTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hardware: props.data.hardware,
    }
  }

  render() {
    return (
      <table className={'ui celled table'}>
        <thead>
        <tr>
          <th/>
          <th>All</th>
          <th>V</th>
          <th>X(%)</th>
          <th>Sale</th>
          <th>Buy</th>
          <th>Av/S $</th>
          <th>Av/B $</th>
        </tr>
        </thead>
        <tbody>
        {
          this.state.hardware
            .filter(hardware => hardware.name)
            .map(hardware =>
              <tr key={hardware.name}>
                <td>{hardware.name}</td>
                <td>{hardware.all}</td>
                <td>{hardware.v}</td>
                <td>{hardware.x}%</td>
                <td>{hardware.sale}</td>
                <td>{hardware.buy}</td>
                <td>{hardware.avs.toFixed(2)}</td>
                <td>{hardware.avb.toFixed(2)}</td>
              </tr>,
            )
        }
        </tbody>
      </table>
    )
  }
}

export default HardwareTable