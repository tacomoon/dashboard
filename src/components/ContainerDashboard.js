import React from 'react'
import ContainerStatsTable from './ContainerStatsTable'
import ContainerTaskChart from './ContainerTaskChart'
import CurrencyChart from './CurrencyChart'
import PlanFactChart from './PlanFactChart'
import RankingTable from './RankingTable'

function ContainerDashboard(props) {
  return (
    <div>
      {/*<ContainerStatsTable data={props.data.containerStatsTable}/>*/}
      {/*<CurrencyChart chartName={props.data.currencyChart.chartName} dataset={props.data.currencyChart.dataset}/>*/}
      {/*<PlanFactChart chartName={props.data.planFactChart.chartName} dataset={props.data.planFactChart.dataset}/>*/}
      <RankingTable container={props.data.rankingTable.container}/>
      <ContainerTaskChart chartName={props.data.containerTaskChart.chartName} dataset={props.data.containerTaskChart.dataset}/>
    </div>
  )
}

export default ContainerDashboard