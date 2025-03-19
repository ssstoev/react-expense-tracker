import React from "react";
import { SingleTransaction } from "./SingleTransaction";
import { Transaction } from "../model";
import { useTransactionContext } from "../context/TransactionProvider";

type Props = {
  transactions: Transaction[];
  // setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>
};


export const TransactionList: React.FC<Props> = ({ transactions }) => {
  const { deleteTxn } = useTransactionContext();

  return(<>
    <h3>Transaction List</h3>
    <ul className="list">
    {transactions.map(
      (transaction) => (
      <SingleTransaction
        key={transaction.id}
        transaction={transaction}
        deleteTxn={deleteTxn}/>
    )
    )}
    </ul>
  </>);
  
};