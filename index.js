import React, { Component } from 'react'
import { render } from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'

let skiData = {
  total: 50,
  powder:20,
  backcoutry: 10,
  goal:100
}

const  SkiDayCounter = ({total, powder, backcoutry, goal}) => {
  return(
    <section>
        <div>
          <p>Total Days: {total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {backcoutry}</p>
        </div>
        <div>
          <p>Goal Progress: {calGoalProgress(total,goal)}</p>
        </div>
      </section>
  )
}

const getPercent =  decimal => {
  return decimal * 100 + '%'
}

const calGoalProgress = (total, goal) => {
  return getPercent(total/goal)
}

render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcoutry={skiData.backcoutry}
    goal={skiData.goal} />,
  document.getElementById('root')
)

serviceWorker.unregister()
