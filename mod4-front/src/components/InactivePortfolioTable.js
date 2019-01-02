import React from 'react'
import { Table } from 'semantic-ui-react'
import { PortfolioTableHeader } from './PortfolioTableHeader'

export class InactivePortfolioTable extends React.Component{
    render(){
        return(
            <Table>
                <PortfolioTableHeader />

            </Table>
        )
    }
    
}