import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
// import styled from "styled-components";
import { connect } from "react-redux";
import { getSomeKey, commitAction } from "./state";
import "./style.scss";

import CharacterCreator from "../CharacterCreator";

const Home = () => <div>Home</div>;

function App({ value, commitAction }) {
    return (
        <Router>
            <Header>Header stuff</Header>
            <div className="container">
                <Route path="/" exact component={Home} />
                <Route path="/CharacterCreator" component={CharacterCreator} />
            </div>
        </Router>
    );
}

const mapState = state => ({
    value: getSomeKey(state)
});

const mapDispatch = {
    commitAction
};

export default connect(
    mapState,
    mapDispatch
)(App);
