import React from 'react';
import './App.css';
import {MainPage} from "./Pages/Main/main.js";
import {InfoPage} from "./Pages/Info/info.js";
import {AboutPage} from "./Pages/AboutMe/about.js";
import {ProjectPage} from "./Pages/Projects/proj.js";

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {page: 0};
    this.handler = this.handler.bind(this);
  }

  handler(e, i){
    e.preventDefault();
    this.setState({
      page: i
    });
  }

  render(){
    switch(this.state.page){
      default:
        return(
          <MainPage handler={this.handler} />
        );
      case 1:
        return(
          <InfoPage handler={this.handler}/>
        );
      case 2:
        return(
          <AboutPage handler={this.handler} />
        );
      case 3:
        return(
          <ProjectPage handler={this.handler} />
        );
    }
    
  }
}