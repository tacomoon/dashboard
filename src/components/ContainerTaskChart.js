import React from 'react'
import { Bar } from 'react-chartjs-2'

function ContainerTaskChart(props) {
  const data = {
    labels: props.labels,
    datasets: [
      {
        type: 'line',
        label: 'ХП',
        data: props.dataset.hp,
        borderColor: '#000000',
        backgroundColor: '#000000',
      },
      {
        type: 'line',
        label: 'БП',
        data: props.dataset.bp,
        borderColor: '#add8e6',
        backgroundColor: '#add8e6',
      },
      {
        type: 'line',
        label: 'Вент',
        data: props.dataset.fan,
        borderColor: '#ff7f7f',
        backgroundColor: '#ff7f7f',
      },
      {
        type: 'line',
        label: 'КП',
        data: props.dataset.kp,
        borderColor: '#90ee90',
        backgroundColor: '#90ee90',
      },
      {
        label: 'Отключение контейнера',
        data: props.dataset.blackouts,
      },
    ],
  }

  return (
    <div>
      <h2 className={'ui header center aligned'}>{props.chartName}</h2>
      <Bar type={'bar'} data={data}/>
    </div>
  )
}

export default ContainerTaskChart