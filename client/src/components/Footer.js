import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


class Footer extends Component{

  render() {
    return (
      <Segment>
        <FooterContainer>
          <Header as="h5">Bucket to Beak Basics</Header>
        </FooterContainer>
      </Segment>
    )
  }
}

const FooterContainer = styled.div `
  position: absolute,
  bottom: 0,
  width: 100%,
`

export default Footer;
