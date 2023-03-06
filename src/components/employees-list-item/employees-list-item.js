
import React from 'react'
import './employees-list-item.css'

const EmployeesListItem = ({name, salary, increase, rise, onDelete, toggleIncrease, toggleRise}) => {

  let classNames = 'list-group-item d-flex justify-content-between'
  let classNames2 = 'list-group-item-label'

  if(increase) {
    classNames += ' increase';
  }
  
  if(rise) {
    classNames += ' like';
    classNames2 += ' like'
  }

  
  return (
    <li className={classNames}  >
      <span className={classNames2} onClick={toggleRise} >{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={salary + ' $'}/>
      <div className='d-flex justify-content-center align-items-center'>
          <button type="button"
              onClick={toggleIncrease}
              className="btn-cookie btn-sm "  >
              <i className="fas fa-cookie"></i>
          </button>

          <button type="button"
                  onClick={onDelete}
                  className="btn-trash btn-sm "
                  >
              <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
      </div>
    </li>
  )
}

export default EmployeesListItem
