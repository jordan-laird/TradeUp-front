import React, { Component } from "react";
import { Table } from 'semantic-ui-react'
import { ActivePortfolioTable } from './ActivePortfolioTable'
import { InactivePortfolioTable } from './InactivePortfolioTable'

export class Portfolio extends Component {
  constructor(){
    super()
    this.state = {
      myTransactionList: []
    }
  }

  fetchTransactions = () => {
    let myTransactions;
    fetch('http://localhost:3001/api/v1/transactions')
    .then(res => res.json())
    .then((transactions) => {
      myTransactions = transactions.filter(transaction => transaction.user_id === 1)
      this.setState({ myTransactionList: myTransactions })
     
      //TODO SWITCH TO CURRENT USER
      
    })
    
  }

  componentDidMount(){
    this.fetchTransactions()
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <ActivePortfolioTable myTransactionList={this.state.myTransactionList}/>
        <InactivePortfolioTable myTransactionList={this.state.myTransactionList}/>
      </div>
    )
  }
}
