import React, {Component} from 'react';
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';
import Project from '../Project/Projects';
import Navbar from "../Navbar/Navbar";


export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Navbar />
        <MainPage />
        <Project />
        <Footer />
      </div>
    );
  }
}
