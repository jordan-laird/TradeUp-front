import React from 'react'
import { Table } from 'semantic-ui-react'

export class InactivePortfolioTableHeader extends React.Component{
    render() {
        return(
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Company Name</Table.HeaderCell>
                    <Table.HeaderCell>Purchased Price</Table.HeaderCell>
                    <Table.HeaderCell>Sold Price</Table.HeaderCell>
                    <Table.HeaderCell>Gain/Loss</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        )
    }
}