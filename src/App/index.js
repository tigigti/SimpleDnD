import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import Header from "./Header";
import Sider from "./Sider";
import styled from "styled-components";
import { connect } from "react-redux";
import { getSomeKey, commitAction } from "./state";
import CharacterCreator from "../CharacterCreator";

const { Content, Footer } = Layout;

const StyledFooter = styled(Footer)`
    text-align: center;
    width: 100%;
    font-style: italic;
`;

const MainContainer = styled(Layout)`
    margin-top: 24px;
`;

const MainContent = styled(Content)`
    padding: 0 24px;
`;

const PaddingBox = styled.div`
    padding: 16px;
    background-color: white;
`;

const Start = () => <div>Start</div>;

function App({ value, commitAction }) {
    return (
        <Router>
            <Layout>
                <Header />
                <MainContainer>
                    <Sider />
                    <MainContent>
                        <PaddingBox>
                            {/* <span>{value}</span>
                            <button onClick={() => commitAction({ age: 10 })}>
                                Dispatch an Action
                            </button> */}
                            <Route path="/" exact component={Start} />
                            <Route path="/cc" component={CharacterCreator} />
                        </PaddingBox>
                    </MainContent>
                </MainContainer>
                <StyledFooter>footer</StyledFooter>
            </Layout>
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
