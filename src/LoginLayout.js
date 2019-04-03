import React, { Component, Fragment } from 'react';
import axios from 'axios';
//content
import Navbar from './reUsabaleComp/Navbar/Navbar';
import Footer from './reUsabaleComp/Footer';

//css
import './App.css';
import Login from './component/login/Login';
import Container from './reUsabaleComp/Container';
import IsLoading from './reUsabaleComp/IsLoading';

class LayoutMain extends Component {
   constructor(props) {
      super(props)
      this.state = {
         isLoading: true,
         orang: [],
         menu: [
            {
               text: 'Beranda',
               link: '/',
            },
            {
               text: 'Meet Up',
               link: '/meetUp',
            },
            {
               text: 'Experience',
               link: '/experience',
            }
         ]
      }

   }

   ChangeMenu = () => {
      this.setState({
         menu: [
            {
               text: 'Beranda',
               link: '/',
            }
         ]
      })
   }

   ChangeMenuBack = () => {
      this.setState({
         menu: [
            {
               text: 'Beranda',
               link: '/',
            },
            {
               text: 'Meet Up',
               link: 'https://hlmifzi.com',
            },
            {
               text: 'Experience',
               link: 'https://hlmifzi.com',
            }
         ]
      })
   }

   componentDidMount() {
      this.setState({ isLoading: false })

      axios
         .get("https://swapi.co/api/people")
         .then(response => this.setState({ orang: response.data.results }));
      // .then(response => console.log(response.data.results));


   }

   render() {
      const Content = () => {
         let { orang } = this.state

         return (
            <Fragment>
               <Navbar ListMenu={this.state} ChangeMenuBack={this.ChangeMenuBack} />
               <Container>
                  <Login />
               </Container>
               <Footer textFooter="Copyleft Hacktive 8" />
            </Fragment >
         )
      }

      return (
         this.state.isLoading ? <IsLoading Judul="Orang Sabar di sayang Allah" /> : <Content />

      );
   }
}

export default LayoutMain;
