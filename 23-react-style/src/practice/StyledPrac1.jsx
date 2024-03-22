import logo from "../logo.svg";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`;

const RootDiv = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const AppHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppLogo = styled.img`
  animation: ${rotate} infinite 20s linear;
`;

const MyA = styled.a`
  color: skyblue;
`;
export default function StyledPrac1() {
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app" />
        <p style={{ color: "white" }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href="https://react.js.org"
          targe="_blank"
          rel="noopener noreferrer"
        >
          learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}
