import React from "react";

export default function MoneyDetails({
  balanceAmount,
  incomeAmount,
  expensesAmount,
}) {
  return (
    <div className="flex flex-row justify-around align-center">
      <div className="border-2 rounded-lg font-bold text-black  flex  flex-col justify-around align-center px-2 py-2 mx-10 my-10 w-1/6 bg-blue-200">
        <div>
          <p>Your Balance</p>
          <p testid="balanceAmount">Rs {balanceAmount}</p>
        </div>
      </div>
      <div className="border-2 rounded-lg font-bold text-black  flex  flex-col justify-around align-center px-2 py-2 mx-10 my-10 w-1/6 bg-blue-200">
        <div>
          <p>Your Income</p>
          <p testid="incomeAmount">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="border-2 rounded-lg font-bold text-black  flex  flex-col justify-around align-center px-2 py-2 mx-10 my-10 w-1/6 bg-blue-200">
        <div>
          <p>Your Expenses</p>
          <p testid="expensesAmount">Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  );
}
