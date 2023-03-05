
import React from 'react'
import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

const EmployeesList = () => {
  return (
    <div>
      <ul className='app-list list-group'>
        <EmployeesListItem/>
        <EmployeesListItem/>
        <EmployeesListItem/>
      </ul>
    </div>
  )
}

export default EmployeesList
