import React from "react";

export default function MoneyDetails({
  balanceAmount,
  incomeAmount,
  expensesAmount,
}) {
  return (
    <div className="flex flex-row ">
      <div className="border-2 rounded-2xl font-bold text-black text-center  flex  flex-col justify-around align-center px-2 py-2 mx-10 my-10 w-1/6 bg-blue-200 ">
        <div>
          <p>Your Balance</p>
          <p>Rs {balanceAmount}</p>
        </div>
      </div>
      <div className="border-2 rounded-2xl font-bold text-black  text-center flex  flex-col justify-around align-center px-2 py-2 mx-10 my-10 w-1/6   bg-blue-200">
        <div>
          <p>Your Income</p>
          <p>Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="border-2 rounded-2xl font-bold text-black text-center flex  flex-col justify-around  px-2 py-2 mx-10 my-10 w-1/6 bg-blue-200">
        <div>
          <p>Your Expenses</p>
          <p>Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  );
}
