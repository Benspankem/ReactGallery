import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


export default class Nav extends Component {

    onButtonClick = e => {
        this.props.onClick(e.target.innerText);
    }

render() {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/cats" onClick={this.onButtonClick}>Cats</NavLink></li>
                <li><NavLink to="/dogs" onClick={this.onButtonClick}>Dogs</NavLink></li>
                <li><NavLink to="/fish" onClick={this.onButtonClick}>Fish</NavLink></li>
            </ul>
        </nav>
    )
}
}

