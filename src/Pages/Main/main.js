import React from 'react';
import './main.css';
import gitpic from "./github.png";
import linkpic from "./linkedin.png";
import instapic from "./insta.png";
import emailpic from "./email.png";
import infopic from "./info.png";


var linkgit = "https://github.com/itenpn";
var linkin = "https://www.linkedin.com/in/paul-nicholas-iten-332967168/";
var linkinsta = "https://www.instagram.com/nick.iten/";
var linkemail = "mailto:iten.pn@gmail.com";

export class MainPage extends React.Component{

    render(){
        return(
            <div>
                <br />
                <div className = "Logo">
                    <h1>Nicholas Iten</h1>
                </div>
                <div className="Links">
                    <table>
                        <tr>
                            <td><a target="_blank" href={linkgit}><img src={gitpic} /></a></td>
                            <td><a target="_blank" href={linkin}><img src={linkpic}/></a></td>
                            <td><a target="_blank" href={linkinsta}><img src={instapic}/></a></td>
                            <td><a target="_blank" href={linkemail}><img src={emailpic}/></a></td>
                            <td><a onClick={(e) => {this.props.handler(e,1)}}><img src={infopic}/></a></td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }

}