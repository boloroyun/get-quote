import React, {Component} from 'react';
import MainPage from '../MainPage/MainPage';
import Projects from '../Project/Projects';
import Footer from '../Footer/Footer';

export default class HomePage extends Component {
  render() {
  return <>
        <MainPage />
        <Projects />
        <Footer />
        </>
    
}
}
