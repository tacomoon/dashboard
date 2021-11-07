import React from 'react'
import BoardRepairmentTable from './BoardRepairmentTable'
import CurrencyChart from './CurrencyChart'
import CurrencyTable from './CurrencyTable'
import HardwareTable from './HardwareTable'
import ManufacturingTable from './ManufacturingTable'
import PieChart from './PieChart'
import PlanFactChart from './PlanFactChart'
import TotalStatsTable from './TotalStatsTable'

function MainDashboard(props) {
  return (
    <div className="ui grid">

      <div className="six wide column">
        <CurrencyTable data={props.data.currenciesTable}/>
        <CurrencyChart chartName={props.data.currencyChart.chartName} dataset={props.data.currencyChart.dataset}/>
      </div>

      <div className="ten wide column">

        <div className="ui two column grid">
          <div className="row">
            <div className="column">
              <PlanFactChart chartName={props.data.planFactChart.chartName} dataset={props.data.planFactChart.dataset}/>
            </div>
            <div className="column">
              <TotalStatsTable data={props.data.totalStatsTable}/>
            </div>
          </div>
        </div>

        <HardwareTable data={props.data.hardwareTable}/>

        <div className="ui three column grid">
          <div className="column">
            <PieChart chartName={props.data.hardwarePieChart.chartName} dataset={props.data.hardwarePieChart.dataset}/>
          </div>
          <div className="column">
            <PieChart chartName={props.data.incomePieChart.chartName} dataset={props.data.incomePieChart.dataset}/>
          </div>
          <div className="column">
            <BoardRepairmentTable data={props.data.boardRepairmentTable}/>
            <ManufacturingTable data={props.data.manufacturingTable}/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default MainDashboard