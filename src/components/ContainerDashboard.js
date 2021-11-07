import React from 'react'
import ContainerStatsTable from './ContainerStatsTable'

function ContainerDashboard(props) {
  return (
    <ContainerStatsTable data={props.data.containerStatsTable}/>
  )
}

export default ContainerDashboard