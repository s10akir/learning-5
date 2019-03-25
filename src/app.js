import React,{Component} from "react";
import {Route, Switch} from "react-router-dom";
import Notice_board from "./notice_board";
import Header from './header';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route exact path={"/"} component={Notice_board} />
                <Route render={() => <h2>Not Found</h2>} />
            </Switch>
        );
    }
}