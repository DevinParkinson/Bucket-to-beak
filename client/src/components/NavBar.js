import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import styled from 'styled-components';
import Logo from '../Images/Fiverr.png';

const LogoImage = styled(Image)`
  height: 10vh;
  width: auto;
  display: flex;
  justify-content: center;
`

const NavBack = styled.div`
  display: block;
  align-self: center;
  background-image: url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3380034.jpg");
  background-size: cover;
`

const NavFront = styled.div`
  background-image: url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3380034.jpg");
  display: block;
  align-self: center;
  margin-left: 10%;
  margin-right: 10%;
`

class NavBar extends Component {

  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right' secondary>
        <Button inverted>
          <Link to='/login' style={{color: '#000000'}}>
            <Icon name='user outline' />
            Login
          </Link>
        </Button>
        <Button inverted style={{color: '#000000'}}>
          <Icon name='info circle' />
          About
        </Button>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <NavBack>
        <NavFront>
          <Menu pointing>
            <Menu.Item position='left'>
              <Link to='/'>
                <LogoImage src={Logo} />
              </Link>
            </Menu.Item>
            { this.rightNavs() }
          </Menu>
        </NavFront>
      </NavBack>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
