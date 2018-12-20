import React from 'react'
import { Container } from 'semantic-ui-react'


export class SelectedCompanyContainer extends React.Component{
    
    render(){
        if(!this.props.company) return <h3>NEED TO FIND PLACEHOLDER</h3>
        return(
            <Container>
                <h1>{this.props.company.companyName}</h1>

                <p>Description: {this.props.company.description}</p>
                <p>Industry: {this.props.company.industry}</p>
                <p>CEO: {this.props.company.CEO}</p>
                <img src={this.props.logo.url} />
                

            </Container>
        )
    }
}