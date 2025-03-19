import React, { createContext, useContext, useState } from "react";
import { Transaction } from "../model";
// import { TotalBalance } from "../components/TotalBalance";

type TransactionContextType = {
  txn: Transaction,
  setTxn: React.Dispatch<React.SetStateAction<Transaction>>,
  textError: boolean,
  amountError: boolean,
  transactions: Transaction[];
  totalBalance: number;
  income: number,
  expense: number,
  addTransaction: (txn: Transaction) => void;
  deleteTxn: (id: number) => void;
};

const TransactionContext = createContext<TransactionContextType | undefined>(undefined)

export const useTransactionContext = () => {
  const context = useContext(TransactionContext);

  if (!context){
    throw new Error('useTransactionContext must be used within a TransactionProvider');
  };

  return context
};

type TransactionProviderProps = {
  children: React.ReactNode; 
};

export const TransactionProvider: React.FC<TransactionProviderProps> = ({ children }) => {
  const [txn, setTxn] = useState<Transaction>({id: 0, text: "", amount: 0});
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [textError, setTextError] = useState<boolean>(false);
  const [amountError, setAmountError] = useState<boolean>(false);

  //calculate dynamically total Balance, income and expense using only transactions state 
  const totalBalance = transactions.reduce((sum, txn) => sum += txn.amount, 0);
  const positiveTxns: Transaction[] = transactions.filter(txn => txn.amount >= 0);
  const negativeTxns: Transaction[] = transactions.filter(txn => txn.amount < 0);

  const income = positiveTxns.reduce((sum, txn) => sum += txn.amount, 0);
  const expense = negativeTxns.reduce((sum, txn) => sum += txn.amount, 0);

  const addTransaction = (transaction: Transaction) => {

    let isValid: boolean = true;

    if (!transaction.text || transaction.text.trim() === "") {
      // throw new Error("no description provided");
      setTextError(true);
      isValid = false;
    }; 

    if (!transaction.amount || transaction.amount === 0) {
      // throw new Error("no amount provided");
      setAmountError(true);
      isValid = false;
    }; 
    
    // don't allow submit if there's an empty field
    if (!isValid) return;
    setTransactions((prev) => [...prev, transaction]);
    setTextError(false);
    setAmountError(false);
    isValid = true;

    setTxn({id: Math.random()*1000, text: "", amount: 0});

  };

  const deleteTxn = (id: number) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id))
  };

  return (
    <TransactionContext.Provider value={{ txn, setTxn, textError, amountError, transactions, totalBalance, income, expense, addTransaction, deleteTxn }}>
      {children}
    </TransactionContext.Provider>
  );
};





