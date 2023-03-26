import styled from "styled-components";

const Content = styled.div`
  background-color: #ffffff;
  width: 1200px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

export default Content;
