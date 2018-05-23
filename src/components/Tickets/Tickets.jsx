import React, { Component } from 'react'
import styled from 'styled-components'
import Waypoint from 'react-waypoint';

import EBWidgets from '../../assets/scripts/eb_widgets.js'
import hypnotize from '../../assets/images/hypnotize.png'

export default class Tickets extends Component{

    eventbriteWidget(){
        window.EBWidgets.createWidget({
            // Required
            widgetType: 'checkout',
            eventId: '44955026695',
            iframeContainerId: 'eventbrite-widget-container-44955026695',
    
            // Optional
            iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
        });
    }
    componentDidMount(){
        this.eventbriteWidget();
    }
    render(){
        var exampleCallback = function() {
            console.log('Order complete!');
        };
        
        
        
        return(
            <TicketContent id="tickets">
                <SectionTitle>What's New</SectionTitle>
                <LeftTicket>
                    <About>
                        <AboutItem>Huge Prizes</AboutItem>
                        <AboutItem>Huge Prizes</AboutItem>
                        <AboutItem>Huge Prizes</AboutItem>
                        <AboutItem>Huge Prizes</AboutItem>
                        <AboutItem>Huge Prizes</AboutItem>
                    </About>
                </LeftTicket>
                <RightTicket>
                    <EventbritePurchase>
                        <div id="eventbrite-widget-container-44955026695" ></div>
                    </EventbritePurchase>
                </RightTicket>
            </TicketContent>
        )
    }
}

const TicketContent = styled.div`
display: grid;
grid-template-areas: 
"title title"
"left right";
grid: auto / 1fr 1fr;

`

const SectionTitle = styled.h2`
    grid-area: title;
    font-weight: 400;
    font-size: 4rem;
    font-family: 'Fruktur', cursive;
    float: left;
    padding: 1em;
    transform: skewY(-11.5deg);
    text-shadow: 0 0 42px #EBC046;
    color: white;
    margin: 0;
    &.vertical{
        transform: skewY(0);
        writing-mode: vertical-rl;
        text-orientation: upright;
        float: right;
        position: absolute;
        right: 20px;
        padding: 0;
        margin: 0;
    }
    @media(max-width: 763px){
        font-size: 3em;
    }
`
const LeftTicket = styled.div`
display: flex;
grid-area: left;
float: left
padding: 3rem;
width: 50%;
`
const RightTicket = styled.div`
display: flex;
grid-area: right;
float: right;
width: 50%;
`
const EventbritePurchase = styled.div`
margin: auto;
z-index: 3;
height: 450px;
padding: 1em;
`
const About = styled.ul`
display: inline-grid;
float: left;
padding: 1rem;
`

const AboutItem = styled.li`
display: block;
float: left;
padding: 1rem;

`