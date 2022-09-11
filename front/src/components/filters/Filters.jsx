import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/actions/categoryActions';
import { filterByCategory, getNotes } from '../../redux/actions/noteActions';
import './Filters.css'


export default function Filters() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
      }, [dispatch])
      
    function onChange(e) {
        if (e.target.value !== "null") dispatch(filterByCategory(e.target.value))
        else dispatch(getNotes())
    }
    
      const { categories } = useSelector((state) => state)
  return (
      <div className='filter-container'>
          <label htmlFor="">Filter:</label>
          <select name="filter" onChange={(e)=>onChange(e)}>
              <option name="null" value="null">------</option>
              {categories && categories.length > 0 && categories.map((c) => 
                  <option key={c.id} name={c.name} value={c.name}>{c.name}</option>
              )}
          </select>
    </div>
  )
}
