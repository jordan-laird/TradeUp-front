import React from 'react'
import { Container, Button, Form, Divider } from 'semantic-ui-react'
import { Chart } from 'chart.js'


export class SelectedCompanyContainer extends React.Component{
    
    // historicalChart = () => {
    //     new Chart(ctx, {
    //         type: 'line',
    //         data: data,
    //         options: {
    //             elements: {
    //                 line: {
    //                     tension: 0, // disables bezier curves
    //                 }
    //             },
    //             animation: {
    //                 duration: 0, // general animation time
    //             },
    //             hover: {
    //                 animationDuration: 0, // duration of animations when hovering an item
    //             },
    //             responsiveAnimationDuration: 0,
    //         }
    //     })
    // }
    render(){
        if(!this.props.company) return <h3>NEED TO FIND PLACEHOLDER</h3>
        let previousDayStats = this.props.chart[this.props.chart.length - 1]
        let currentCompany = this.props.company
        let currentCompanyLogo = this.props.logo.url
        let currentCompanyNews = this.props.news
        return(
            <Container>
                <h1>{currentCompany.companyName}</h1>
                <img src={currentCompanyLogo} />

                <p>Description: {currentCompany.description}</p>
                <p>Industry: {currentCompany.industry}</p>
                <p>CEO: {currentCompany.CEO}</p>
                
                <h2>Stats</h2>
                <p> Last Reported: {previousDayStats.date } </p>
                <p> Open: {previousDayStats.open}</p>
                <p> Close: {previousDayStats.close}</p>
                <p> High: {previousDayStats.high}</p>
                <p> Change: {previousDayStats.changePercent}%</p>

                <h2>Recent News</h2>
                <h4><a href={currentCompanyNews[0].url} target="_blank">{currentCompanyNews[0].headline} - {currentCompanyNews[0].source} </a></h4>


                {/* <Form>
                    <Form.Field>
                        <label>Quantity</label>
                        <input placeholder="Quantity"/>
                    </Form.Field>
                    <Button>Purchase Shares</Button>
                </Form>
                 */}

            </Container>
        )
    }
}