
import React from 'react'
import EmployeesListItem from '../employees-list-item/employees-list-item'
import './employees-list.css'

const EmployeesList = ({data}) => {

  let elem = data.map((item) => {
    return <EmployeesListItem key={item.id} name={item.name} salary={item.salary} increase={item.increase} />
    // return <EmployeesListItem key={item.id} {...item}/>
  })

  return (
    <div>
      <ul className='app-list list-group'>
        {elem}
      </ul>
    </div>
  )
}

export default EmployeesList
