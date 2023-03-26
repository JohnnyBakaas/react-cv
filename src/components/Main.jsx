import styled from "styled-components";
import Content from "./Content";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
`;

const Main = ({ children }) => {
  return (
    <StyledMain>
      <Content>{children}</Content>
    </StyledMain>
  );
};

export default Main;
