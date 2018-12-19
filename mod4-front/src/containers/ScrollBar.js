import React from 'react'
import { SBCompanyInfo } from '../components/SBCompanyInfo'
const url = 'https://api.iextrading.com/1.0//stock/market/batch?symbols=aapl,fb,tsla,ba,brk.b,dis,ge,hd,nke,sbux,dji,amzn,baba,goog,nflx,adbe,ftnt,grub,irbt,mcd&types=company'

export class ScrollBar extends React.Component{
    constructor(){
        super()
        this.state = {
            companyInfo: []
    }

    }

    fetchCompanyInfo = () => {
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
                            companyInfo: arrayOfCompanies
                        })
            })
    }

    componentDidMount() {
        this.fetchCompanyInfo()
    }

    render(){
        return(
            <div>
                <SBCompanyInfo companyInfo={this.state.companyInfo} />

            </div>
        )
    }

}