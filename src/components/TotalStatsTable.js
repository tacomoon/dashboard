import React from 'react'

class TotalStatsTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stats: props.data.stats,
    }
  }

  render() {
    return (
      <div>
        <h2 className={'ui header center aligned'}>Total</h2>
        <table className={'ui celled table'}>
          <thead>
          <tr>
            <th/>
            <th>max</th>
            <th>fact</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.stats
              .filter(stat => stat.name)
              .map(stat =>
                <tr key={stat.name}>
                  <td>{stat.name}</td>
                  <td>{(stat.max % 1 === 0) ? stat.max : stat.max.toFixed(2)}</td>
                  <td>{(stat.fact % 1 === 0) ? stat.fact : stat.fact.toFixed(2)}</td>
                </tr>,
              )
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default TotalStatsTable