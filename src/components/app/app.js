
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
  const [term, setTerm] = useState('')
  const [filter, setFilter] = useState('all')

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

  
  const searchEmp = (items, term) => {
    if(term.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1
    })
  }

    const updateSearch = (term) => {
      setTerm(term)
     }

     const filterPost = (items, filter) => {
      switch(filter) {
        case 'rise': return items.filter(item => item.rise);
        case 'moreThen1000': return items.filter(item => item.salary > 1000);
        default: return items
      }
    }
    
    const onFilterSelect = (filter) => {
      setFilter(filter)
    }

    const visibleList = filterPost(searchEmp(list, term), filter)
    const counterEmployees = list.length
    const increaseList = list.filter((item) => item.increase === true).length
    const riseList = list.filter((item) => item.rise === true).length
  


  return (
    <div className='app'>
      <AppInfo lengthList={counterEmployees} increaseList={increaseList} riseList={riseList}/>
      <div className="search-panel">
        <SearchPanel updateSearch={updateSearch} />
        <AppFilter filter={filter} onFilterSelect={onFilterSelect}/>
      </div>
      <EmployeesList 
        data={visibleList} 
        onDelete={onDelete} 
        toggleIncrease={toggleIncrease}  
        toggleRise={toggleRise} />
      <EmployeesAddForm data={list} addItem={addItem} />

    </div>
  )
}

export default App
