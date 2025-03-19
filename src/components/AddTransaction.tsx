import React from "react";
import { Transaction } from "../model";
import { useTransactionContext } from '../context/TransactionProvider.tsx';

type Props = {
  txn: Transaction;
  setTxn: React.Dispatch<React.SetStateAction<Transaction>>;
  handleAdd: (e: React.SyntheticEvent) => void;
};

export const AddTransaction: React.FC<Props> = ({ txn, setTxn, handleAdd}) => {

  const { textError, amountError } = useTransactionContext();

  return(
    <div>
      <h2>Add New Transaction</h2>
      <form className="add-transaction"
        onSubmit={(e) => handleAdd(e)}>
        <div className="text">
          <p>Text</p>
          <input className={textError ? "input-invalid" : "input"} type="text" placeholder="Enter text..."
            value={txn.text}
            onChange={(e) => setTxn({ ...txn, text: e.target.value })}/>
          <p>Amount</p>
          <input className={amountError ? "input-invalid" : "input"}
            type="number"
            value={txn.amount}
            onChange={(e) => setTxn({ ...txn, amount: Number(e.target.value) })}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
};