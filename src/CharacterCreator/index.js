import React from "react";
import { Row, Col, Input, Select as Sl, Card } from "antd";
import styled from "styled-components";

const { Option } = Sl;
const Select = styled(Sl)`
    width: 100%;
`;

const MarginBotRow = styled(Row)`
    margin-bottom: 24px;
`;

const Score = styled.div`
    margin-bottom: 8px;
    text-align: center;
    font-size: 18px;
`;

const Modifier = styled.div`
    display: block;
    border: 1px solid grey;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin: auto;
    text-align: center;
    line-height: 40px;
`;

const CharacterCreator = props => {
    return (
        <div>
            <MarginBotRow gutter={16}>
                <Col span={8}>
                    <Input placeholder="Character Name" />
                </Col>
                <Col span={16}>
                    <Row>
                        <Col span={8}>Class</Col>
                        <Col span={8}>Background</Col>
                        <Col span={8}>Player Name</Col>
                    </Row>
                    <Row gutter={8}>
                        <Col span={8}>
                            <Select>
                                <Option value="human">Human</Option>
                                <Option value="elf">Elf</Option>
                                <Option value="dwarf">Dwarf</Option>
                                <Option value="gnome">Gnome</Option>
                                <Option value="halfelf">Half-Elf</Option>
                                <Option value="halfling">Halfling</Option>
                                <Option value="halforc">Half-Orc</Option>
                                <Option value="dragonborn">Dragonborn</Option>
                                <Option value="tiefling">Tiefling</Option>
                            </Select>
                        </Col>
                        <Col span={8}>Alignment</Col>
                        <Col span={8}>Exp</Col>
                    </Row>
                </Col>
            </MarginBotRow>
            <Row gutter={16}>
                <Col span={4}>
                    <Card title="Strength">
                        <Score>Your score</Score>
                        <Modifier>+1</Modifier>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card title="Dexterity">
                        <Score>Your score</Score>
                        <Modifier>+1</Modifier>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card title="Constitution">
                        <Score>Your score</Score>
                        <Modifier>+1</Modifier>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card title="Intelligence">
                        <Score>Your score</Score>
                        <Modifier>+1</Modifier>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card title="Wisdom">
                        <Score>Your score</Score>
                        <Modifier>+1</Modifier>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card title="Charisma">
                        <Score>Your score</Score>
                        <Modifier>+1</Modifier>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default CharacterCreator;
