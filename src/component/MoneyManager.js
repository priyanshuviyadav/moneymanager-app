import React from "react";

import { useState } from "react";
import { nanoid } from "nanoid";
import MoneyDetails from "./MoneyDetails";
import TransactionItem from "./TransactionItem";

export default function MoneyManager() {
  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [optionId, setOptionId] = useState("");
  const [transactionsList, setTransactionList] = useState([]);

  const transactionTypeOptions = [
    {
      optionId: "INCOME",
      displayText: "Income",
    },
    {
      optionId: "EXPENSES",
      displayText: "Expenses",
    },
  ];

  const deleteTransaction = (id) => {
    const updatedTransactionList = transactionsList.filter(
      (eachTransaction) => id !== eachTransaction.id
    );

    setTransactionList(updatedTransactionList);
  };

  const handleAddTransaction = (event) => {
    event.preventDefault();

    const typeOption = transactionTypeOptions.find(
      (eachTransaction) => eachTransaction.optionId === optionId
    );

    const { displayText } = typeOption;

    const newTransaction = {
      id: nanoid(5),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    };

    setTransactionList([...transactionsList, newTransaction]);
    setAmountInput("");
    setTitleInput("");
    setOptionId("");
  };

  const handleOptionId = (event) => {
    setOptionId(event.target.value);
  };

  const handleAmountInput = (event) => {
    setAmountInput(event.target.value);
  };

  const handleTitleInput = (event) => {
    setTitleInput(event.target.value);
  };

  const getExpenses = () => {
    let expensesAmount = 0;

    transactionsList.forEach((eachTransaction) => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount = eachTransaction.amount;
      }
    });

    return expensesAmount;
  };

  const getIncome = () => {
    let incomeAmount = 0;
    transactionsList.forEach((eachTransaction) => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount = eachTransaction.amount;
      }
    });

    return incomeAmount;
  };

  const getBalance = () => {
    let balanceAmount = 0;
    let incomeAmount = 0;
    let expensesAmount = 0;

    transactionsList.forEach((eachTransaction) => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount = eachTransaction.amount;
      } else {
        expensesAmount = eachTransaction.amount;
      }
    });

    balanceAmount = incomeAmount - expensesAmount;

    return balanceAmount;
  };

  const balanceAmount = getBalance();
  const incomeAmount = getIncome();

  const expensesAmount = getExpenses();

  return (
    <div className="app-container">
      <div className="responsive-container">
        <div className="header-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="header-content">
            Welcome back to your
            <span className="money-manager-text"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="transaction-details">
          <form className="transaction-form" onSubmit={handleAddTransaction}>
            <h1 className="transaction-header">Add Transaction</h1>
            <label className="input-label" htmlFor="title">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              value={titleInput}
              onChange={handleTitleInput}
              className="input"
              placeholder="TITLE"
            />
            <label className="input-label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              type="number"
              id="amount"
              className="input"
              value={amountInput}
              onChange={handleAmountInput}
              placeholder="AMOUNT"
            />
            <label className="input-label" htmlFor="select">
              TYPE
            </label>
            <select
              id="select"
              className="input"
              value={optionId}
              onChange={handleOptionId}
            >
              <option></option>
              {transactionTypeOptions.map((eachOption) => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <div className="history-transactions">
            <h1 className="transaction-header">History</h1>
            <div className="transactions-table-container">
              <ul className="transactions-table">
                <li className="table-header">
                  <p className="table-header-cell">Title</p>
                  <p className="table-header-cell">Amount</p>
                  <p className="table-header-cell">Type</p>
                </li>
                {transactionsList.map((eachTransaction) => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
