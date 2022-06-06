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
    <>
      <div className="table-fixed flex flex-col justify-row 	">
        <li className="flex flex-col justify-items-start list-none mx-5 my-5 px-2 mt-2 py-2 space-y-1 font-bold text-xs text-justify ">
          <p>{title}</p>
          <p>Rs {amount}</p>
          <p>{type}</p>

          <div>
            <button
              className="border-2 border-solid rounded-xl bg-black text-white font-bold"
              type="button"
              onClick={onDeleteTransaction}
            >
              delete
            </button>
          </div>
        </li>
      </div>
    </>
  );
}
