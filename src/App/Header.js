import React from "react";
import { Layout, Menu } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Head = Layout.Header;
const Logo = styled.div`
    height: 32px;
    width: 96px;
    background-color: lightgreen;
    float: left;
    margin: 16px 28px 16px 0;
    border: 2px solid crimson;
`;

const Header = () => {
    return (
        <Head>
            {/* <Logo /> */}
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
                <Menu.Item key="1">
                    <Link to="/">Start Game</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/cc">Create Character</Link>
                </Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Head>
    );
};

export default Header;
