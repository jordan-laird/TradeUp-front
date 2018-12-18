import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

export class HomePage extends React.Component{
    render() {
        return(
            <div>
                <Container textAlign='left'>Left Aligned</Container>
                <Divider />
                <Container textAlign='center'>Center Aligned</Container>
                <Container textAlign='right'>Right Aligned</Container>
            </div>
        )
    }
}