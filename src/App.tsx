import React, { useState } from 'react';
import './App.css'
import { Header } from './components/Header.tsx';
import { TotalBalance } from './components/TotalBalance.jsx';
import { IncomeExpenseBox } from './components/IncomeExpenseBox.tsx';
import { TransactionList } from './components/TransactionList.tsx';
import { AddTransaction } from './components/AddTransaction.tsx';
import { useTransactionContext } from './context/TransactionProvider.tsx';

function App() {
  const { txn, setTxn, transactions, totalBalance, income, expense, addTransaction } = useTransactionContext();
  // const [txn, setTxn] = useState<Transaction>({id: 0, text: "", amount: 0});

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    addTransaction({id: Math.floor(Math.random() * 1000), text: txn.text, amount: txn.amount});
    // setTxn({id: Math.random()*1000, text: "", amount: 0});
    console.log(transactions)
  };

  return (
    <div className='container'>
      <Header/>
      <TotalBalance
        totalBalance={totalBalance}/>

      <IncomeExpenseBox
        income={income}
        expense={expense}/>
        
      <TransactionList
        transactions={transactions}/>

      <AddTransaction
        txn={txn}
        handleAdd={handleAdd}
        setTxn={setTxn}
        // handleChange={handleChange}
        />
        
    </div>
  );
}

export default App
