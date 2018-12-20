import React from 'react'
import { Container, Divider, Grid } from 'semantic-ui-react'
import { ScrollBar } from '../containers/ScrollBar'
import { SelectedCompanyContainer } from '../containers/SelectedCompanyContainer'
const url = 'https://api.iextrading.com/1.0//stock/market/batch?symbols=aapl,fb,tsla,ba,brk.b,dis,ge,hd,nke,sbux,dji,amzn,baba,goog,nflx,adbe,ftnt,grub,irbt,mcd&types=company'




export class HomePage extends React.Component{

    constructor() {
        super()
        this.state = {
            companyList: [],
            selectedCompany: {}
        }

    }

    fetchCompanyList = () => {
        fetch(url)
            .then(res => res.json())
            .then((companies) => {
                let arrayOfCompanies = []
                for (const company in companies) {
                    if (companies.hasOwnProperty(company)) {
                        const element = companies[company];
                        arrayOfCompanies.push(element.company)
                        // console.log(arrayOfCompanies);
                    }
                }
                this.setState({
                    companyList: arrayOfCompanies
                })
            })
    }

    fetchExtendedInfo = (companySymbol) => {
        fetch(`https://api.iextrading.com/1.0//stock/market/batch?symbols=${companySymbol}&types=company,logo,chart&range=ytd`)
            .then(res => res.json())
            .then((companyData) =>  {this.setState({selectedCompany: companyData[companySymbol]})} )
    }

    componentDidMount() {
        this.fetchCompanyList()
    }

    

    handleClick = (companySymbol) => {
        this.fetchExtendedInfo(companySymbol)
    }
    
    render() {
        return(
            <div>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <ScrollBar companyList={this.state.companyList} handleClick={this.handleClick} />
                        </Grid.Column>
                        <Grid.Column>
                            <SelectedCompanyContainer {...this.state.selectedCompany} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                
                
            </div>
        )
    }
}