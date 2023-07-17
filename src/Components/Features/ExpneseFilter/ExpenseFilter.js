import React from 'react';
import classes from './style.module.css';

const ExpenseFilter = ({ year, getYear, filterExpense }) => {
  const yearGetHandler = (e) => {
    console.log(e.target.value);
    getYear(e.target.value);
  };

  return (
    <div className={classes["filter-data"]}>
      <h3>Filter</h3>
      <select
        onChange={yearGetHandler}
        value={year}
        className={filterExpense && filterExpense.length === 0 ? classes["no-record"] : undefined}
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
