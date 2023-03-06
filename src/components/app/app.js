
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
      id: id(),
    }
    setList([...data, newItem ])
  }



  return (
    <div className='app'>
      <AppInfo/>
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployeesList data={list}   />
      <EmployeesAddForm data={list} addItem={addItem}/>

    </div>
  )
}

export default App
