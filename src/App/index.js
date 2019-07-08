import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StartScreen from "./StartScreen";

const CC = () => <div>CC</div>;

function App() {
    return (
        <Router>
            <Route path="/" exact component={StartScreen} />
            <Route path="/cc/" component={CC} />
        </Router>
    );
}

export default App;
