import React from 'react';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("http://mortgagemerchant.ca/under-construction.jpg");
  background-size: cover;
`

class About extends React.Component {
  render(){
    return (
      <AppContainer>
        <Header>Main Page w/ Bullets</Header>
        <ul>Local</ul>
        <ul>Responsive</ul>
        <ul>Regenerative</ul>
        <p>Mainly for building top soil. Makes them more enviromentally friendly. improve local food quality. reduce carbon footprint.</p>
        <p>About page. Will receive what the about things are later.</p>
        <p>Three step process on main page. Accordian style showing steps to complete process. Simple easy layout. FAQ at bottom. Main Logo is home link.</p>
        <p>Contact Us</p>
        <p>See if you are in the coverage area in contact page.</p>
      </AppContainer>
    )
  }
}

export default About;
