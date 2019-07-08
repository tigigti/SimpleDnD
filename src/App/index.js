import React from "react";
import styled, { keyframes } from "styled-components";
import { Card, Button } from "antd";

const blendIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-1000px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CenteredBox = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const ButtonContainer = styled.div`
    button {
        margin-bottom: 8px;
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

const StyledCard = styled(Card)`
    animation: ${blendIn} 1.5s;
`;

function App() {
    return (
        <CenteredBox>
            <StyledCard title="Simple DnD">
                <ButtonContainer>
                    <Button type="primary" block>
                        Start Game
                    </Button>
                    <Button type="primary" block>
                        Create Character
                    </Button>
                </ButtonContainer>
            </StyledCard>
        </CenteredBox>
    );
}

export default App;
