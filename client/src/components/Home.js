import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';

const AppContainer = styled.div`
  justify-content: center;
  background-image: url("https://www.gannett-cdn.com/-mm-/cf59ef81c81abe3d60ecd65e8f191c7284bca08b/c=0-345-3853-2522&r=x1683&c=3200x1680/local/-/media/2017/05/30/WisPub/WisconsinStateFarmer/636317822843016918-NDNBrd-04-29-2017-Citizen-1-B002--2017-04-27-IMG-GettyImages-48653045-2-1-Q8I72A07-L1018974487-IMG-GettyImages-48653045-2-1-Q8I72A07.jpg");
  background-size: cover;
  width: 100%;
  height: 100vh;
  text-align: center;
  font-family: Courier;
  color: white;
`

class Home extends Component {
  render() {
    return (
      <AppContainer>
        <Header as='h1' style={{color: '#ffffff', fontFamily: 'Times New Roman'}}>Bucket To Beak Curbside Composting</Header>
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
    );
  }
}

export default Home;
