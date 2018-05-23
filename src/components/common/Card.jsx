import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'

export default class Card extends Component {
    burgerToggle() {
        let linksEl = document.querySelector('.narrowLinks');
        if (linksEl.style.display === 'block') {
            linksEl.style.display = 'none';
        } else {
            linksEl.style.display = 'block';
        }
      }

    render(){
        const {menuItems} = this.props;
        
        return(
            <DropMenu  >
                <DropButton  className="fa fa-bars fa-2x" /> 
                 
                <DropItems className="narrowLinks">
                {menuItems.map((menuItem) =>
                     <DropLink onClick={this.burgerToggle}>{menuItem}</DropLink>
                )}
                </DropItems>
            </DropMenu>
        )
    }
}

const DropMenu = styled.div`
`

const DropButton = styled.i`
float: left;
`
const DropItems = styled.div`
display: none;

`
const DropLink = styled.a`
display: block;
float: left;
clear: left;
`