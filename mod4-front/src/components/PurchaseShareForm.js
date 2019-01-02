import React from 'react'
import { Form, Button } from 'semantic-ui-react'
export class PurchaseShareForm extends React.Component{
    addTransaction = (e) => {
        fetch('http://localhost:3001/api/v1/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                purchased_price: e.target.pricePerShare.value,
                stock: e.target.companyName.value,
                stock_symbol: e.target.companySymbol.value,
                status: true,
                user_id: 1

                // TODO NEED TO CHANGE TO LOGGED IN USER
            }) 

        })
    }

    

    handlePurchaseShareClick = () => {
        console.log('Purchase Confirmed')
    }
    render(){
        console.log(this.props)

        return(
            <div>
                <Form onSubmit={e => this.addTransaction(e)}>
                    <Form.Input fluid label="Company" name="companySymbol"value={this.props.company['symbol']} readOnly />
                    <Form.Input fluid label="Company" name="companyName"value={this.props.company['companyName']} readOnly />
                    <Form.Input fluid label="Price Per Share" name="pricePerShare" value={this.props.currentPrice.close ? this.props.currentPrice.close : this.props.chart[this.props.chart.length - 1].close } readOnly />

                    <Form.Field>
                         <label>Quantity</label>
                         <input placeholder='Quantity' name="quantity" />
                    </Form.Field>

                    <Button onClick={e => this.handlePurchaseShareClick()} type="submit">Confirm Purchase</Button>
                </Form>
            </div>
        )
    }
}