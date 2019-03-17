import React, { Component, Fragment } from 'react';

//content
import Navbar from './reUsabaleComp/Navbar/Navbar';
import Footer from './reUsabaleComp/Footer';

//css
import './App.css';
import Home from './component/home/Home';
import Container from './reUsabaleComp/Container';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [
        {
          text: 'Meet Up',
          link: 'https://facebook.com',
        },
        {
          text: 'Experience',
          link: 'https://hlmifzi.com'
        },
        {
          text: 'Menu Tambahan',
          link: 'https://hlmifzi.com'
        }
      ]
    }

    this.ChangeMenu = this.ChangeMenu.bind(this);
    this.ChangeMenuBack = this.ChangeMenuBack.bind(this);
  }

  ChangeMenu() {
    this.setState({
      menu: [
        {
          text: 'Meet Upa New',
          link: 'https://facebook.com',
        }
      ]
    })
  }

  ChangeMenuBack() {
    this.setState({
      menu: [
        {
          text: 'Meet Up',
          link: 'https://facebook.com',
        },
        {
          text: 'Experience',
          link: 'https://hlmifzi.com'
        },
        {
          text: 'Menu Tambahan',
          link: 'https://hlmifzi.com'
        }
      ]
    })
  }
  render() {
    return (
      <Fragment>
        <Navbar ListMenu={this.state} ChangeMenuBack={this.ChangeMenuBack} />
        <Container>
          <Home ChangeMenu={this.ChangeMenu} />
        </Container>
        <Footer textFooter="Copyleft Hacktive 8" />
      </Fragment >
    );
  }
}

export default App;
