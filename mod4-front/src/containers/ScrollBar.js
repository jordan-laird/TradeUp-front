import React from 'react'
import { SBCompanyList } from '../components/SBCompanyList'
import { Grid } from 'semantic-ui-react'

export class ScrollBar extends React.Component{
    

    render(){
        return(
            <div style={{ height: `${window.innerHeight}px`, overflowY: 'scroll', marginLeft: '20px', marginTop: '60px'} }>
                <SBCompanyList companyList={this.props.companyList} handleClick={this.props.handleClick} currentPrices={this.props.currentPrices}/>
            </div>
        )
    }

}