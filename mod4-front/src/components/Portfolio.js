import React, { Component } from "react";
import { Table } from 'semantic-ui-react'
import { ActivePortfolioTable } from './ActivePortfolioTable'
import { InactivePortfolioTable } from './InactivePortfolioTable'

const url = 'https://api.iextrading.com/1.0//stock/market/batch?symbols=aapl,fb,tsla,ba,brk.b,dis,ge,hd,nke,sbux,dji,amzn,baba,goog,nflx,adbe,ftnt,grub,irbt,mcd&types=chart&range=1d'
const userID = localStorage.getItem("userID")

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
      myTransactions = transactions.filter(transaction => transaction.user_id = userID)
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
        sold_price: this.props.currentPrices[transactionInfo.stock_symbol] ? this.props.currentPrices[transactionInfo.stock_symbol].close : 0
        // TODO SOLD PRICE

        
      })

    })
      .then(() => { this.fetchTransactions()})
      
  }
  

  componentDidMount(){
    console.log(userID)
    this.fetchTransactions()
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <h1>Current Portfolio</h1>
        <ActivePortfolioTable myTransactionList={this.state.myTransactionList} sellShare={this.sellShare} currentPrices={this.props.currentPrices}/>
        <h1>Previously Owned</h1>
        <InactivePortfolioTable myTransactionList={this.state.myTransactionList}/>
      </div>
    )
  }
}
