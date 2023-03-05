
import React from 'react'
import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

const EmployeesList = ({data}) => {

  const result = data.map((elem) => {
    return <EmployeesListItem name={elem.name} salary={elem.salary}/>
  })

  return (
    <div>
      <ul className='app-list list-group'>
        {result}
      </ul>
    </div>
  )
}

export default EmployeesList
