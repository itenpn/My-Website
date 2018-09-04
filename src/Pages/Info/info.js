import React from 'react';
import './info.css';

export class InfoPage extends React.Component{

    render(){
        return(
            <div>
                <div className = "head">
                    <h1>Nicholas Iten</h1>
                </div>
                <div className = "options">
                    <h3 onClick={(e) => {this.props.handler(e,2)}}>About Me</h3>
                    <h3 onClick={(e) => {this.props.handler(e,3)}}>Projects</h3>
                    <h3 onClick={(e) => {this.props.handler(e,0)}}>Exit</h3>
                </div>
            </div>
        );
    }
}