import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import { ScrollBar } from '../containers/ScrollBar'


export class HomePage extends React.Component{
  
    // constructor(){
    //     super()
    //     this.state = {
    //         stocks: []
    //     }
    // }
    
    render() {
        return(
            <div>
                <ScrollBar />
            </div>
        )
    }
}