import React from 'react'

class BoardRepairmentTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      repairment: props.data.repairment,
    }
  }

  render() {
    return (
      <div>
        <h2 className={'ui header center aligned'}>Ремонт плат</h2>
        <table className={'ui celled table'}>
          <thead>
          <tr>
            <th/>
            <th>Принято</th>
            <th>Починено</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.repairment
              .filter(repairment => repairment.name)
              .map(repairment =>
                <tr key={repairment.name}>
                  <td>{repairment.name}</td>
                  <td>{repairment.taken}</td>
                  <td>{repairment.repaired}</td>
                </tr>,
              )
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default BoardRepairmentTable