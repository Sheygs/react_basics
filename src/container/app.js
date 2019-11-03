import React from 'react';
import './app.css';
//import Lists from '../components/Lists';
//import MyInfo from '../components/MyInfo';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
const App = _ => {
  return (
    <div>
        <Header/>
        <MainContent/>
        <Footer/>
    </div>
  )
}  

export default App;