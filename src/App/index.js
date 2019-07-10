import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import Header from "./Header";
import Sider from "./Sider";
import styled from "styled-components";

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
    padding: 0 16px;
    background-color: white;
`;

const Start = () => <div>Start</div>;

const CC = () => <div>CC</div>;

function App() {
    return (
        <Router>
            <Layout>
                <Header />
                <MainContainer>
                    <Sider />
                    <MainContent>
                        <PaddingBox>
                            <Route path="/" exact component={Start} />
                            <Route path="/cc" component={CC} />
                        </PaddingBox>
                    </MainContent>
                </MainContainer>
                <StyledFooter>footer</StyledFooter>
            </Layout>
        </Router>
    );
}

export default App;
