import React from 'react'
import PlanFactChart from './PlanFactChart'
import TotalStatsTable from './TotalStatsTable'

function RankingTable(props) {
  return (
    <div>
      <h2 className={'ui header center aligned'}>Ответсвенный</h2>
      <div style={{ 'text-align': 'center' }}>{props.container.responsibility}</div>
      <h2 className="ui header center aligned">Рейтинг контейнера</h2>
      <div className="ui two column grid">
        <div className="row">
          <div className="column center aligned">
            <h3 className="ui header">Место</h3>
            {props.container.ranking}
          </div>
          <div className="column center aligned">
            <h3 className="ui header">Балл</h3>
            {props.container.score.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RankingTable