import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import styled from 'styled-components';
import Logo from '../Images/Fiverr.png';

const LogoImage = styled(Image)`
  height: 8vh;
  float: center
`

const NavBack = styled.div`
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnlkZdrRTw3lyRo2GvXFa4IDBRW4ew0n74C7KZnh35vnvGm20bfA");
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
        <Link to='/register'>
          <Button>
            <Icon name='signup' />
            Sign Up Now!
          </Button>
        </Link>
        <Link to='/login'>
          <Button overflow='hidden'>
          <Icon name='user outline' />
          Login
          </Button>
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <NavBack>
        <Menu pointing secondary>
          <Button>
            <Icon name='info circle' />
            About
          </Button>
          <Link to='/' centered>
            <LogoImage src={Logo} />
          </Link>
          { this.rightNavs() }
        </Menu>
      </NavBack>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
