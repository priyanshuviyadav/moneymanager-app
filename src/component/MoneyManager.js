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
      amount: amountInput,
      type: displayText,
    };
    console.log(newTransaction);
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
        expensesAmount += eachTransaction.amount;
      }
    });

    return expensesAmount;
  };

  const getIncome = () => {
    let incomeAmount = 0;
    transactionsList.forEach((eachTransaction) => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount;
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
        incomeAmount += eachTransaction.amount;
      } else {
        expensesAmount += eachTransaction.amount;
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
        <div className="text-center border-2 rounded-lg px-4 py-4 mx-5 my-5 bg-blue-100 ">
          <h1 className="font-bold  text-xl">Hi, Richard</h1>
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
        <div className="flex flex-row justify-around align-center border-2 rounded-lg  mx-1/2 my-1/2  px-10 py-10 ">
          <form
            className="text-center font-bold text-sm text-black  border-4 rounded-xl  w-1/3  h-1/3 "
            onSubmit={handleAddTransaction}
          >
            <h1 className="font-bold text-2xl">Add Transaction</h1>
            <label htmlFor="title">TITLE</label>
            <br />
            <input
              type="text"
              id="title"
              value={titleInput}
              onChange={handleTitleInput}
              className="border-2 rounded-lg"
              placeholder="TITLE"
            />
            <br />
            <label htmlFor="amount">AMOUNT</label>
            <br />
            <input
              type="text"
              id="amount"
              className="border-2 rounded-lg"
              value={amountInput}
              onChange={handleAmountInput}
              placeholder="AMOUNT"
            />
            <br />
            <label htmlFor="select">TYPE</label>
            <br />
            <select
              id="select"
              className="border-2 rounded-lg"
              value={optionId}
              onChange={handleOptionId}
            >
              {transactionTypeOptions.map((eachOption) => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <br />
            <br />
            <button
              type="submit"
              className="border-2 rounded-xl px-2 py-2 bg-blue-600"
            >
              Add
            </button>
          </form>
          <div className="border-2 rounded-lg w-1/3 text-left">
            <h1 className="text-center font-bold text-2xl">History</h1>
            <div className="border-2 rounded px-2 py-2 mx-5 my-5">
              <ul className="flex flex-row justify-items-start ">
                <li className="flex flex-row justify-items-start list-none mx-5 my-5 px-2 py-2 space-x-5 font-bold text-xs text-justify ">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
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
