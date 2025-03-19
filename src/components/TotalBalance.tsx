import React from "react";

type Props = {
  totalBalance: number
};

export const TotalBalance: React.FC<Props> = (totalBalance) => {

  return(
    <div className="total-balance-container">
      <h3>Total Balance</h3>
      <p className="total-balance">{totalBalance.totalBalance >= 0 ? "" : "-"}${Math.abs(totalBalance.totalBalance)}</p>
    </div>
  )
};
