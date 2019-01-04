import React from 'react'
import { Table } from 'semantic-ui-react'
import { InactivePortfolioTableHeader } from './InactivePortfolioTableHeader'

export class InactivePortfolioTable extends React.Component{
    render(){
        let filtered = this.props.myTransactionList.filter(transaction => transaction.status === false)
        return(
            <Table>
                <InactivePortfolioTableHeader />
                
                {filtered.map(transactionInfo => (
                    <Table.Row>
                        <Table.Cell>{transactionInfo.stock}</Table.Cell>
                        <Table.Cell>{transactionInfo.purchased_price}</Table.Cell>
                        <Table.Cell>{transactionInfo.sold_price}</Table.Cell>
                        <Table.Cell>{(transactionInfo.sold_price - transactionInfo.purchased_price).toFixed(2)}</Table.Cell>
                    </Table.Row>
                ))}
            </Table>
        )
    }
    
}