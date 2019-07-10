import React from "react";
import { Layout, Menu, Icon } from "antd";

const Sidebar = Layout.Sider;
const { SubMenu } = Menu;

const Sider = () => {
    return (
        <Sidebar width={200} style={{ background: "#fff" }} breakpoint="md" collapsedWidth={0}>
            <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
                <SubMenu
                    key="sub3"
                    title={
                        <span>
                            <Icon type="notification" />
                            subnav 3
                        </span>
                    }
                >
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
            </Menu>
        </Sidebar>
    );
};

export default Sider;
