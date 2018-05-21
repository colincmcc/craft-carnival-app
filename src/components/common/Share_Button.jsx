import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled, {keyframes} from 'styled-components'


class ShareButton extends Component{
    constructor(props) {
        super(props);
        this.state = { expanded: false }
    }

    toggleShareMenu = () => {
        this.setState({ expanded: !this.state.expanded})
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
                <ShareLink className={expanded ? 'expanded' : ''} onClick={this.toggleShareMenu} >Share <SocialIcon className="alt fa fa-share-alt" /> </ShareLink>
                
            </ShareToggle>
        )
    }
    
}

export default ShareButton
const ShareToggle = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    font-family: 'Eczar', serif;
    font-size: 1.25em;
    font-weight: 900;
    text-shadow: 0px 2px 0 #C56543;

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

    