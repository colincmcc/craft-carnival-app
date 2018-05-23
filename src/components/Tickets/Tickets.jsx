import React, { Component } from 'react'
import styled from 'styled-components'
import Waypoint from 'react-waypoint';

import EBWidgets from '../../assets/scripts/eb_widgets'
import hypnotize from '../../assets/images/hypnotize.png'
import fireBreather from '../../assets/images/duotone_fire.png'

export default class Tickets extends Component{
    

    componentDidMount(){
        this.eventbriteWidget();
    }
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
    

    render(){     
        
        
        return(
            <TicketContent id="tickets">
                <LeftTicket>
                <SectionTitle>What's New</SectionTitle>
                    <About>
                        <AboutItem>SIDESHOW ACTS</AboutItem>
                        <AboutItem>HUGE GRANDE PRIZES</AboutItem>
                        <AboutItem>FOOD TRUCKS</AboutItem>
                        <AboutItem>BLACKSMITHING</AboutItem>
                        <AboutItem>ART VENDORS</AboutItem>
                        <AboutItem>LIVE MUSIC</AboutItem>
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
    background-image: url(${fireBreather});
    background-size: cover;
    flex-direction: column;
    padding: 2rem;
    @media(min-width: 763px){
        flex-direction: row;

    }
`

const SectionTitle = styled.h2`
    font-weight: 400;
    font-size: 3rem;
    font-family: 'Fruktur', cursive;
    padding: 0 1rem;
    transform: skewY(-11.5deg);
    text-shadow: 0 0 42px #FBD45D;
    color: #252525;
    @media(min-width: 763px){
        font-size: 4rem;
    }
`
const LeftTicket = styled.div`
display: flex;
flex-direction: column;
width: 100%;
text-align: center;
@media(min-width: 763px){
    width: 50%;
    float: left;

    }
`
const RightTicket = styled.div`
display: flex;
flex-direction: column;
width: 100%;
@media(min-width: 763px){
width: 50%;
float: right;
}

`
const EventbritePurchase = styled.div`
    display: flex;
    margin: auto;
    z-index: 3;
    height: 450px;

@media(min-width: 763px){
    padding: 2em 0 0 0 ;
}


`
const About = styled.ul`
    display: inline-grid;
    float: left;
    padding: 1rem;
    text-align: center;
    margin: auto;
    @media(min-width: 763px){

        text-align: justify;
    }
`
const AboutItem = styled.li`
    display: block;
    float: left;
    font-family: 'Concert One', cursive;
    color: white;
    font-size: 1.5em;
    padding: .5rem;
    @media(min-width: 763px){

        font-size: 2em;
    }

`