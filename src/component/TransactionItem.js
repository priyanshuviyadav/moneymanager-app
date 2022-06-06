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
    <li className="flex flex-row justify-between align-center list-none px-10 py-10 border-2 rounded-lg">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <div>
        <button
          className="border-2 border-solid rounded-xl bg-black text-white font-bold"
          type="button"
          onClick={onDeleteTransaction}
          testid="delete"
        >
          delete
        </button>
      </div>
    </li>
  );
}
