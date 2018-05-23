import React, { Component } from 'react'
import styled from 'styled-components'
import Waypoint from 'react-waypoint';

import EBWidgets from '../../assets/scripts/eb_widgets'
import hypnotize from '../../assets/images/hypnotize.png'
import fireBreather from '../../assets/images/duotone_fire.png'

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
        
        
        return(
            <TicketContent id="tickets">
                <LeftTicket>
                <SectionTitle>What's New</SectionTitle>
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
    display: flex;
    background-image: url(${fireBreather}) no-repeat center center;
    background-size: cover;

`

const SectionTitle = styled.h2`
    font-weight: 400;
    font-size: 3rem;
    font-family: 'Fruktur', cursive;
    padding: 1em;
    transform: skewY(-11.5deg);
    text-shadow: 0 0 42px #e44c1c;
    color: #252525;
    @media(min-width: 763px){
        font-size: 4rem;
    }
`
const LeftTicket = styled.div`
display: flex;
flex-direction: column;
float: left
width: 50%;
`
const RightTicket = styled.div`
display: flex;
flex-direction: column;
float: right;
width: 50%;

`
const EventbritePurchase = styled.div`
@media(min-width: 763px){
    display: flex;
    margin: auto;
    z-index: 3;
    height: 450px;
    padding: 1em;}


`
const About = styled.ul`
display: inline-grid;
float: left;
padding: 1rem;
`

const AboutItem = styled.li`
display: block;
float: left;
font-family: 'Concert One', cursive;
color: white;
font-size: 1.25em;
padding: 1rem;

`