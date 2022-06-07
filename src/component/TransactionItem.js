import React from "react";

export default function TransactionItem({
  transactionDetails,
  deleteTransaction,
}) {
  const { id, title, amount, type } = transactionDetails;

  const onDeleteTransaction = () => {
    deleteTransaction(id);
  };

  return (
    <li className="table-row">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">Rs {amount}</p>
      <p className="transaction-text">{type}</p>
      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteTransaction}
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  );
}
