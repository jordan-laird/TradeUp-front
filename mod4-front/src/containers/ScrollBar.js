import React from 'react'
import { SBCompanyList } from '../components/SBCompanyList'
import { Grid } from 'semantic-ui-react'

export class ScrollBar extends React.Component{
    

    render(){
        return(
            <div style={{height:`${window.innerHeight}px`, overflowY:'scroll'}}>
            <br />
            <br />
                <SBCompanyList companyList={this.props.companyList} handleClick={this.props.handleClick}/>
            </div>
        )
    }

}