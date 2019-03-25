import React,{Component} from "react";
import {Link, Route} from "react-router-dom";

export default class Header extends Component {

    render() {
        return (
            <div>
                <Link to={"/"}>Hello BBS</Link>
                <Link to={"/login"}>SignIn</Link>
            </div>
        );
    }
}