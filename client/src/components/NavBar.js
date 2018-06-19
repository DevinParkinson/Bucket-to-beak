import React, { Component } from 'react';
import { Menu, Image, Divider, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import styled from 'styled-components';
import Logo from '../images/Fiverr.png';

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
  background-color: white;
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
      <Menu.Menu position='right'>
        <Menu.Item>
          <Link to='/login' style={{color: '#000000'}}>
          <Icon name='user outline' />
          Login
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/about' style={{color: '#000000'}}>
            <Icon name='info circle' />
            About
          </Link>
        </Menu.Item>
        <Divider hidden />
      </Menu.Menu>
    );
  }

  render() {
    return (
      <NavBack>
        <NavFront>
          <Menu secondary>
            <Menu.Item position='left'>
              <Link to='/'>
                <LogoImage src={Logo} />
              </Link>
            </Menu.Item>
            <Menu.Item style={styles.text}>Local, Responsive, Regenerative</Menu.Item>
            { this.rightNavs() }
          </Menu>
        </NavFront>
      </NavBack>
    );
  }
}

const styles = {
  text: {
    color: "#0adb0c",
    fontFamily: "Comic Sans MS",
    fontSize: "large",
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
