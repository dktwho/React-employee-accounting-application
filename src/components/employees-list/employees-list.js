
import React from 'react'
import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

const EmployeesList = () => {
  return (
    <div>
      <ul className='app-list list-group'>
        <EmployeesListItem name='Bill Branson' salary={1000}/>
        <EmployeesListItem name='Ted Tedson' salary={1200}/>
        <EmployeesListItem name='John Johnson' salary={1400}/>
      </ul>
    </div>
  )
}

export default EmployeesList
