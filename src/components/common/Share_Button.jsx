import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled, {keyframes} from 'styled-components'


class ShareButton extends Component{
    constructor(props) {
        super(props);
        this.state = { expanded: false }
        this.toggleShareMenu = this.toggleShareMenu.bind(this);   

    }

    toggleShareMenu = () => {
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
                <SocialLinks className={expanded ? 'expanded' : ''}> 
                    <SocialIcon onClick={() => {window.open("https://twitter.com")}} className="fa fa-twitter"/>
                    <SocialIcon onClick={() => {window.open("https://facebook.com")}} className="fa fa-facebook"/>
                    <SocialIcon onClick={() => {window.open("https://instagram.com")}} className="fa fa-instagram"/>
                </SocialLinks>
                <ShareLink className={expanded ? 'expanded' : ''} onClick={this.toggleShareMenu} >INVITE <SocialIcon className="alt fa fa-share-alt" /> </ShareLink>
                
            </ShareToggle>
        )
    }
    
}

export default ShareButton
const ShareToggle = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
    margin: auto;
    padding-top: 2rem;
    font-family: 'Eczar', serif;
    font-size: 1.5em;
    font-weight: 900;
    text-shadow: 0px 2px 0 #C56543;
    cursor: pointer;

`
const GrowLeftAnim = keyframes`
    from {
        transform: scaleX(0);
    }
    to {
        transform: scaleX(1);
`
const FadeInRightAnim = keyframes`

    from {
      opacity: 0;
      transform: translateX(-15px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  
`
const SocialIcon = styled.i`

    padding: 10px;
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
flex-direction: column;
height: 125px;
    vertical-align: baseline;
    transform: scaleY(0);
    transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition: 0.5s;
    transform-origin: top;
    text-align: center;
    &.expanded{
        transform: scaleY(1);
    }

`
const ShareLink = styled.div`
transform: translateY( -125px);
transition: 0.5s;
font-family: 'Eczar', serif;
font-size: 1.25em;
font-weight: 900;
text-shadow: 0px 2px 0 #C56543;
&.expanded{
    transform: translateY(0);
}
&:hover{outline:2px solid #C56543}


`

    