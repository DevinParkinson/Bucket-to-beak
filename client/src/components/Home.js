import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';
import './main.css';
import Compost1 from '../images/compost1.jpg';
import Compost2 from '../images/compost2.jpg';
import Compost3 from '../images/compost3.jpeg';
import Compost4 from '../images/compost4.png';


const AppContainer = styled.div`
  justify-content: center;
  background-image: url("https://www.gannett-cdn.com/-mm-/cf59ef81c81abe3d60ecd65e8f191c7284bca08b/c=0-345-3853-2522&r=x1683&c=3200x1680/local/-/media/2017/05/30/WisPub/WisconsinStateFarmer/636317822843016918-NDNBrd-04-29-2017-Citizen-1-B002--2017-04-27-IMG-GettyImages-48653045-2-1-Q8I72A07-L1018974487-IMG-GettyImages-48653045-2-1-Q8I72A07.jpg");
  background-size: cover;
  margin-left: 10%;
  margin-right: 10%;
  height: 100vh;
  text-align: center;
  font-family: Courier;
  color: #ffffff;
`
const FullApp = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-image: url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3380034.jpg");
`

class Home extends Component {
  render() {
    return (
      <FullApp>
        <AppContainer>
          <Carousel autoPlay infiniteLoop width="fluid" showArrows={true}>
              <div>
                  <img src={Compost1} alt='Pic1' />
                  <p className="legend">Bilge water yardarm chase Yellow Jack splice the main brace bounty skysail lateen sail lanyard Sea Legs.</p>
              </div>
              <div>
                  <img src={Compost2} alt='Pic2' />
                  <p className="legend">Chantey bucko Davy Jones Locker pressgang avast tack nipper American Main wherry broadside. Splice the main brace driver careen Jack Tar maroon long boat red ensign gangway lanyard chandler.</p>
              </div>
              <div>
                  <img src={Compost3} alt='Pic3' />
                  <p className="legend">Heave down barque deadlights rutters no prey, no pay league grapple quarter jolly boat capstan. Starboard grog blossom spanker matey lanyard parrel snow tender boom rigging.</p>
              </div>
              <div>
                  <img src={Compost4} alt='Pic4' />
                  <p className="legend">Measured fer yer chains Yellow Jack spyglass Jack Tar no prey, no pay yardarm spirits sutler scuppers six pounders.</p>
              </div>
        </Carousel>
          <Header as='h1' style={{fontFamily: 'Times New Roman'}}>Bucket To Beak Curbside Composting</Header>
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
      </FullApp>
    );
  }
}

export default Home;
