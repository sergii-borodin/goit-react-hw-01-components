import React from 'react'
import PropTypes from 'prop-types'
import { TransactionsTable, TransactionsTableHeader, TransactionsTableData, TransactionsTableRow } from './TransactionsHistory.styled'

const TransactionHistory = ({transactions}) => 
    <TransactionsTable>
  <thead>
    <TransactionsTableRow>
      <TransactionsTableHeader>Type</TransactionsTableHeader>
      <TransactionsTableHeader>Amount</TransactionsTableHeader>
      <TransactionsTableHeader>Currency</TransactionsTableHeader>
    </TransactionsTableRow>
  </thead>

  <tbody>
    {transactions.map(({id, type, amount, currency}) => 
    <TransactionsTableRow key={id}>
      <TransactionsTableData>{type}</TransactionsTableData>
      <TransactionsTableData>{amount}</TransactionsTableData>
      <TransactionsTableData>{currency}</TransactionsTableData>
    </TransactionsTableRow>)}
    
  </tbody>
</TransactionsTable>


TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
        })
    )
}

export default TransactionHistory