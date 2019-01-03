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
                        <Table.Cell><SBCurrentPrices companySymbol={transactionInfo.stock_symbol} key={transactionInfo.stock_symbol} /></Table.Cell>
                        <Table.Cell>PLACEHOLDER</Table.Cell>
                        <Table.Cell><Button onClick={this.props.sellShare.bind(this, transactionInfo)}>Sell Share</Button></Table.Cell>
                    </Table.Row>
                ))}
            </Table>
        )
    }
}