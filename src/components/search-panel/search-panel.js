import React, { useState } from 'react'
import './search-panel.css'

const SearchPanel = ({updateSearch}) => {
  const [term, setTerm] = useState('')

const onUpdateSearch = (e) => {
  const term = e.target.value
  setTerm(term)
  updateSearch(term)
}

  return (
    <input 
      type="text"
      className='form-control search-input'
      placeholder='Найти сотрудника'
      value={term} 
      onChange={onUpdateSearch} />
  )
}

export default SearchPanel
