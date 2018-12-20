import React from 'react'


export class SBCurrentPrices extends React.Component{

    constructor(){
        super()
        this.state = {
            currentPrice: {}
        }
    }
    fetchCurrentPrice = () => {
        fetch(`https://api.iextrading.com/1.0/stock/${this.props.companySymbol}/chart/1d`)
        .then(res => res.json())
        .then(prices => 
            this.setState({currentPrice: prices[prices.length - 1]}))
    }

    componentDidMount(){
        this.fetchCurrentPrice()
        setInterval(this.fetchCurrentPrice, 30000);
    }

    render(){
        return(
            <div>
            <p>
            {this.state.currentPrice["close"]}
            </p>
            </div>

        )
    }

}