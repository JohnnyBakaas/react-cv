import { ReactComponent as GithubLogo } from "../assets/GithubLogo.svg";
import styled from "styled-components";
import Content from "./Content";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
`;

const StyledTitle = styled.h1`
  margin-left: 20px;
`;

const StyledContent = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <StyledContent>
        <StyledTitle> {props.name} </StyledTitle>
        <div>
          <a href="https://github.com/JohnnyBakaas">
            <GithubLogo />
          </a>
        </div>
      </StyledContent>
    </StyledHeader>
  );
};

export default Header;
