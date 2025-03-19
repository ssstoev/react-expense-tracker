import React from "react";

type Props = {
  income: number,
  expense: number
}
  
export const IncomeExpenseBox: React.FC<Props> = ({ income, expense }) => {
  return(
    <div className="income-expense-box">
      <div className="income">
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>

      <div className="expense">
        <h4>Expenses</h4>
        <p className="money minus">-${Math.abs(expense)}</p>
      </div>
    </div>
  )
};