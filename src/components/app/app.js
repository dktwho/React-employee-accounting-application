
import React, { useState } from 'react'
import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'
import {data, id} from '../data/data'


const App = () => {
  const [list, setList] = useState(data)

  const addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: id(),
    }
    setList([...list, newItem ])
  }

  const onDelete = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  const toggleIncrease = (id) => {
    setList(list.map((item) => {
      return item.id === id ? {...item, increase: !item.increase} : {...item}
    }))
  }

  const toggleRise = (id) => {
    setList(list.map((item) => {
      return item.id === id ? {...item, rise: !item.rise} : {...item}
    }))
  }

  const counterEmployees = list.length
  const increaseList = list.filter((item) => item.increase === true).length
  const riseList = list.filter((item) => item.rise === true).length
  
  

 


  return (
    <div className='app'>
      <AppInfo lengthList={counterEmployees} increaseList={increaseList} riseList={riseList}/>
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployeesList 
        data={list} 
        onDelete={onDelete} 
        toggleIncrease={toggleIncrease}  
        toggleRise={toggleRise} />
      <EmployeesAddForm data={list} addItem={addItem} />

    </div>
  )
}

export default App
