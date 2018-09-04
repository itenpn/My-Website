import React from 'react';
import './proj.css';

export class ProjectPage extends React.Component{
    render(){
        return(
            <div>
                <div className = "head">
                    <h1>Nicholas Iten</h1>
                </div>
                <div className = "duh">
                    <h3>You're on my current project. lol</h3>
                </div>
                <div className = "exit">
                    <h3 onClick={(e) => {this.props.handler(e,1)}}>Exit</h3>
                </div>
            </div>
        );
    }
}