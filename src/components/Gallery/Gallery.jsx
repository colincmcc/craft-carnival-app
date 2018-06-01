import React, { Component } from "react";
import styled from "styled-components";

export default class Gallery extends Component {
  render() {
    return (
      <GalleryContent>
        <div> Gallery Placeholder</div>
      </GalleryContent>
    );
  }
}

// STYLED COMPONENTS
const GalleryContent = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 10vh;
`;
