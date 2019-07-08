import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StartScreen from "./StartScreen";

function App() {
    return (
        <Router>
            <Route path="/" exact component={StartScreen} />
        </Router>
    );
}

export default App;
