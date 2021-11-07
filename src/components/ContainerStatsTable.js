import React from 'react'

function ContainerStatsTable(props) {
  return (
    <table className={'ui celled table'}>
      <thead>
      <tr>
        <th/>
        <th>THs</th>
        <th>%</th>
        <th>LTC</th>
        <th>PW</th>
        <th>Total Exp</th>
        <th>$</th>
      </tr>
      </thead>
      <tbody>
      {
        props.data.stats
          .filter(stat => stat.name)
          .map(stat =>
            <tr key={stat.name}>
              <td>{stat.name}</td>
              <td>{(stat.ths) ? stat.ths : 'no value'}</td>
              <td>{(stat.percentage) ? stat.percentage : 'no value'}</td>
              <td>{(stat.lightcoin) ? stat.lightcoin : 'no value'}</td>
              <td>{(stat.power) ? stat.power : 'no value'}</td>
              <td>{(stat.totalExp) ? stat.totalExp : 'no value'}</td>
              <td>{(stat.usd) ? stat.usd : 'no value'}</td>
            </tr>,
          )
      }
      </tbody>
    </table>
  )
}

export default ContainerStatsTable