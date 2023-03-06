import React, { useState } from 'react'
import './employees-add-form.css'


const EmployeesAddForm = ({ addItem }) => {

  const [name, setName] = useState('')
  const [salary, setSalary] = useState('')


  const onSubmit = (e) => {
    if(name.length > 2 && +salary > 0) {
      e.preventDefault()
      addItem(name, salary);
      setName('')
      setSalary('')
     }
    }
   
    
  return (
    <div className="app-add-form">
    <h3>Добавьте нового сотрудника</h3>
      <form onSubmit={onSubmit}
          className="add-form d-flex">
          <input type="text"
              onChange={(e) => setName(e.target.value) }
              value={name}
              className="form-control new-post-label"
              placeholder="Как его зовут?" />
          <input type="number"
              onChange={(e) => setSalary(e.target.value) }
              value={salary}
              className="form-control new-post-label"
              placeholder="З/П в $?" />

          <button type="submit"
                  className="btn btn-outline-light">Добавить</button>
      </form>
</div>
  )
}

export default EmployeesAddForm
