import React from "react";
import { Transaction } from "../model";
import "../App.css"

type Props = {
  transaction: Transaction; 
  deleteTxn: (id: number) => void;
};

export const SingleTransaction: React.FC<Props> = ({ transaction, deleteTxn }) => {
  
  if (!transaction) {
    console.error("Transaction is undefined!");
    return null; // Handle undefined gracefully
  }

  return(
    <li className={`transaction-item ${transaction.amount < 0 ? 'negative' : ''}`}>
      {transaction.text}<span className="txn-amount">${transaction.amount}</span>
      <button className="delete-btn"
        onClick={() => deleteTxn(transaction.id)}>x</button>
    </li>
  )
};
