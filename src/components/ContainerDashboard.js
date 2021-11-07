import React from 'react'
import ContainerStatsTable from './ContainerStatsTable'
import ContainerTaskChart from './ContainerTaskChart'
import CurrencyChart from './CurrencyChart'
import PieChart from './PieChart'
import PlanFactChart from './PlanFactChart'
import RankingTable from './RankingTable'

function ContainerDashboard(props) {
  return (
    <div className="ui grid">

      <div className="six wide column">
        <ContainerStatsTable data={props.data.containerStatsTable}/>
        <CurrencyChart chartName={props.data.currencyChart.chartName} dataset={props.data.currencyChart.dataset}/>
      </div>

      <div className="ten wide column">

        <div className="ui two column grid">
          <div className="row">
            <div className="column">
              <PlanFactChart chartName={props.data.planFactChart.chartName} dataset={props.data.planFactChart.dataset}/>
            </div>
            <div className="column">
              <RankingTable container={props.data.rankingTable.container}/>
            </div>
          </div>
        </div>

        <ContainerTaskChart chartName={props.data.containerTaskChart.chartName}
                            dataset={props.data.containerTaskChart.dataset}/>


        <div className="ui three column grid">
          <div className="column">
            <PieChart chartName={props.data.hardwareProblemPieChart.chartName}
                      dataset={props.data.hardwareProblemPieChart.dataset}/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ContainerDashboard