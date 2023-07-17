import React, { useState } from 'react';
import Container from '../Components/UI/Container/Container';
import ExpenseForm from '../Components/Features/ExpenseForm/ExpenseForm';
import ExpenseList from '../Components/Features/ExpenseList/ExpenseList';
import ExpenseFilter from '../Components/Features/ExpneseFilter/ExpenseFilter';
import NoRecod from '../Components/Features/No Record/NoRecod'

const expenseListArr = [
  {
    id: 1,
    title: "Expense 01",
    price: 233,
    date: new Date("2023-11-22")
  },
  {
    id: 2,
    title: "Expense 02",
    price: 23.4,
    date: new Date("2023-12-12")
  },
  {
    id: 3,
    title: "Expense 03",
    price: 24.5,
    date: new Date("2023-10-07")
  }
];

const Home = () => {
  const [expenseList, setExpenseList] = useState(expenseListArr);
  const [editValues, setEditValues] = useState(null);
  const [year, setYear] = useState('2023');

  const addExpenseHandler = (data, method) => {
    if(method === "add") setExpenseList([data, ...expenseList])
    if(method === 'edit') {
      const editExpense = expenseList.map((d) => {
        if(d.id === data.id) {
          return({
            id: data.id,
            title: data.title,
            price: data.price,
            date: data.date
          })
        }
        return d
      })
      setExpenseList(editExpense);
      setEditValues(null);
    }
  };

  const yearChangeHandler = (data) => {
    setYear(data);
  };

  const getIdHandler = (id, method) => {
    if(method === 'delete') {
      const deletData = expenseList.filter(data => +data.id !== +id);
      setExpenseList(deletData);
    } else if(method === 'edit') {
      const editData = expenseList.filter((data) => data.id === id);
      setEditValues(editData[0]);
    }
  };

  const filterExpense = expenseList.filter((data) => data.date.getFullYear() === +year);
  return (
    <Container>
      <ExpenseForm 
      addExpense={addExpenseHandler} 
      editValues={editValues} 
      />
      <ExpenseFilter year={year} getYear={yearChangeHandler} />
      {filterExpense.length > 0 ?
        <ExpenseList list={filterExpense} getId={getIdHandler} filterExpense={filterExpense} />
        : <NoRecod />
      }
    </Container>
)
};
export default Home;
