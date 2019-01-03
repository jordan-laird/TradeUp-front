import React from 'react'
import { Table, Button, Form } from 'semantic-ui-react'
import { ActivePortfolioTableHeader } from './ActivePortfolioTableHeader'
import { SBCurrentPrices } from './SBCurrentPrices'

export class ActivePortfolioTable extends React.Component{
   
    render(){

        let filtered = this.props.myTransactionList.filter(transaction => transaction.status === true)
        return(

            <Table >
                <ActivePortfolioTableHeader />
               
                {filtered.map(transactionInfo =>(
                    
                    <Table.Row>
                        <Table.Cell>{transactionInfo.stock}</Table.Cell>
                        <Table.Cell>{transactionInfo.purchased_price}</Table.Cell>
                        <Table.Cell>{this.props.currentPrices[transactionInfo.stock_symbol] ? this.props.currentPrices[transactionInfo.stock_symbol].close : null}</Table.Cell>
                        <Table.Cell>{this.props.currentPrices[transactionInfo.stock_symbol] ? this.props.currentPrices[transactionInfo.stock_symbol].close - transactionInfo.purchased_price : null}</Table.Cell>
                        <Table.Cell><Button onClick={this.props.sellShare.bind(this, transactionInfo)}>Sell Share</Button></Table.Cell>
                    </Table.Row>
                ))}
            </Table>
        )
    }
}