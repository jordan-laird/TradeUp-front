import React from 'react'
import { SBCurrentPrices } from './SBCurrentPrices'
import { Container, Divider } from 

export class SBCompanyList extends React.Component{
    render(){
        return(
            <Container>
                {this.props.companyList.map(companyInfo => (
                    <Container onClick={e => this.props.handleClick(companyInfo.symbol)}>
                       <h3 >
                       {companyInfo.symbol}
                       </h3>
                       <h4>
                       {companyInfo.companyName}
                       </h4>
                       <SBCurrentPrices companySymbol={companyInfo.symbol} key={companyInfo.symbol} />
                       <Divider />
                   </Container>

                ))}
            </Container>
        )
    }
}