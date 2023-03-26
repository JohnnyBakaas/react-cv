import styled from "styled-components";

const StyledContainer = styled.div``;
const Container = ({ children }) => {
  return <StyledContainer darkMode>{children}</StyledContainer>;
};

export default Container;
