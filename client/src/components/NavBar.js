import React, { Component } from 'react';
import { Menu, Image, Divider } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import styled from 'styled-components';
import Logo from '../Images/Fiverr.png';

const LogoImage = styled(Image)`
  height: 12vh;
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
        <Menu.Item>
          <Link to='/login' style={{color: '#000000'}}>
            <Icon name='user outline' />
            Login
          </Link>
        </Menu.Item>
        <Menu.Item>
            <Icon name='info circle' />
            About
        </Menu.Item>
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
                <Link to='/register' style={{color: '#ffffff'}}>
                  <Button positive size='large'>
                    <Icon name='signup' />
                    Sign Up Now!
                  </Button>
                </Link>
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
