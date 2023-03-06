
import React from 'react'
import './app-info.css';

const AppInfo = ({lengthList, increaseList, riseList}) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании Y</h1>
      <h2>Общее число сотрудников: {lengthList} </h2>
      <h2>Премию получат:{increaseList} </h2>
      <h3>Сотрудников на повышение: {riseList}</h3>
    </div>
  )
}

export default AppInfo
