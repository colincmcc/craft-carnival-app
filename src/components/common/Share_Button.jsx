import React, { Component } from 'react'
import styled from 'styled-components'


export default class ShareButton extends Component{
    constructor(props) {
        super(props);
        this.state = { expanded: false }
        this.toggleShareMenu = this.toggleShareMenu.bind(this);   

    }

    toggleShareMenu(){
        const {expanded} = this.state;
        if(expanded){
            this.setState({ expanded: false })
        } else {
            this.setState({ expanded: true })
        }
    }
      
    render(){
        const { expanded } = this.state;
        return(
            <ShareToggle> 
                <ShareLink className={expanded ? 'expanded' : ''} onClick={() => this.toggleShareMenu()} >INVITE <SocialIcon className="alt fa fa-share-alt" /> </ShareLink>

                <SocialLinks className={expanded ? 'expanded' : ''}> 
                    <SocialIcon onClick={() => {window.open("https://twitter.com")}} className="fa fa-twitter"/>
                    <SocialIcon onClick={() => {window.open("https://facebook.com")}} className="fa fa-facebook"/>
                    <SocialIcon onClick={() => {window.open("https://instagram.com")}} className="fa fa-instagram"/>
                </SocialLinks>
                
            </ShareToggle>
        )
    }
    
}

const ShareToggle = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    font-family: 'Eczar', serif;
    font-size: 1.5em;
    font-weight: 900;
    text-shadow: 0px 2px 0 #C56543;
    cursor: pointer;
    z-index: 1000;
    margin: 24px 0;
    @media(min-width: 1280px){
        font-size: 2em;
    }

`
const SocialIcon = styled.i`

    padding: 10px;
    margin: auto;
    aria-hidden: true;
    &:hover{color: #C56543}
    &.alt{
        padding: 10px 10px 10px 0;
        &:hover{
            color: inherit;
        }
    }
`

const SocialLinks = styled.div`
    display: flex;
    flex-direction: row;
    width: 126px;
    height
    vertical-align: baseline;
    transform: scaleX(0) translateX(-63px);
    transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition: 0.5s;
    transform-origin: right;
    text-align: center;
    
    &.expanded{
        transform: scaleX(1) translateX(0);
    }

`
const ShareLink = styled.div`
    transform: translateX( 63px);
    transition: 0.5s;
    font-family: 'Eczar', serif;
    font-size: 1.25em;
    font-weight: 900;
    height: auto;
    text-shadow: 0px 2px 0 #C56543;
    text-align: center;
    
    &.expanded{
        transform: translateX(0);
    }
    &:hover{
        outline:2px solid #C56543;
    }


`

    