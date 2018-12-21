import React from 'react'
import { Form, Button } from 'semantic-ui-react'
export class PurchaseShareForm extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <Form>
                    <Form.Input fluid label="Company" value={this.props.company['companyName']} readOnly />
                    <Form.Input fluid label="Price Per Share" value={this.props.currentPrice.close} readOnly />

                    <Form.Field>
                         <label>Quantity</label>
                         <input placeholder='Quantity' />
                    </Form.Field>

                    <Button onClick={e => this.handlePurchaseShareClick()} type="submit">Confirm Purchase</Button>
                </Form>
            </div>
        )
    }
}