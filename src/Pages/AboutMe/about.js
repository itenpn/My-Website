import React from 'react';
import './about.css';

export class AboutPage extends React.Component{
    render(){
        return(
            <div>
                <div className = "para"> 
                    <p>
                        Hello, <br/>
                        My name is Nicholas Iten. I am a student at William Mason High School. <br/><br/>
                        Currently I am working as the Head of Finance for <a href="cincyhacks.com">CincyHacks</a>. <br/><br/>
                        But I also work at United Dairy Farmers as a part-time associate. People know that I am reliable.
                        Whenever my manager needs help, I'm typically the one assigned to solve it. I'm always trying to
                        learn new things. If I'm not at a computer doing homework or writing code, you could find me fishing
                        at Winton Woods, fixing up my b5 1999 Audi A4, cooking a delicious dinner, or walking my dog Carrick.
                        <br /><br/>
                        Since you're here, you probably wanted to hear about my coding ability. Over the course of High School,
                        I have learned VB.NET, C++, Java, HTML, CSS, JavaScript, React, and Python. The challenges of programming
                        and finding the solution to a hard problem motivate me to keep on trying and to solve harder problems.
                        <br /><br/>
                        If you haven't checked out my information, please check out my homepage.
                    </p>
                </div>
                <div className = "exit">
                    <h3 onClick={(e) => {this.props.handler(e,1)}}>Exit</h3>
                </div>
            </div>
        );
    }
}