import React from 'react'

class ManufacturingTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      manufacturing: props.data.manufacturing,
    }
  }

  render() {
    return (
      <div>
        <h2 className={'ui header center aligned'}>Конт. произв.</h2>
        <table className={'ui celled table'}>
          <thead>
          <tr>
            <th/>
            <th>шт.</th>
            <th>$</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.manufacturing
              .filter(manufacture => manufacture.name)
              .map(manufacture =>
                <tr key={manufacture.name}>
                  <td>{manufacture.name}</td>
                  <td>{manufacture.pieces}</td>
                  <td>{manufacture.usd.toFixed(2)}</td>
                </tr>,
              )
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ManufacturingTable