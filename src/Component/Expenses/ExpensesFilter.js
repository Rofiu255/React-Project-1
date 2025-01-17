import React from 'react'
import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
    <div className='expense-filter'>
        <div className='expense-filter__control'>
            <label style={{color: 'white', marginRight: '200px'}}>Filter by filteredYear</label>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
                <option value='2022'>2022</option>
            </select>
        </div>
      
    </div>
  );
}

export default ExpensesFilter
