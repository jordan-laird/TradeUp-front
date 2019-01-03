import React, { Component } from "react";
import { Table } from 'semantic-ui-react'
import { ActivePortfolioTable } from './ActivePortfolioTable'
import { InactivePortfolioTable } from './InactivePortfolioTable'

const url = 'https://api.iextrading.com/1.0//stock/market/batch?symbols=aapl,fb,tsla,ba,brk.b,dis,ge,hd,nke,sbux,dji,amzn,baba,goog,nflx,adbe,ftnt,grub,irbt,mcd&types=chart&range=1d'

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

  sellShare = (transactionInfo) => {
    console.log(transactionInfo)
    fetch(`http://localhost:3001/api/v1/transactions/${transactionInfo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        status: false,
        // TODO SOLD PRICE

        // TODO NEED TO CHANGE TO LOGGED IN USER
      })

    })
      .then(() => { this.fetchTransactions()})
      
  }
  

  componentDidMount(){
    this.fetchTransactions()
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <h1>Current Portfolio</h1>
        <ActivePortfolioTable myTransactionList={this.state.myTransactionList} sellShare={this.sellShare}/>
        <h1>Previously Owned</h1>
        <InactivePortfolioTable myTransactionList={this.state.myTransactionList}/>
      </div>
    )
  }
}
