import React from 'react'
import { SBCurrentPrices } from './SBCurrentPrices'
import { Container, Divider } from 'semantic-ui-react'

export class SBCompanyList extends React.Component{
    render(){
        return(
            <Container >
                {this.props.companyList.map(companyInfo => (
                   <Container>
                       <h3>
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