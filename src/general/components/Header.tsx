import styled from "styled-components";
import Container from "./Container";
import Advertisement from "./Advertisement";
import Navbar from "./Navbar";

const StyledHeader = styled.header`
  padding-top: 40px;
  width: 100%;
`;

const StyledContainer = styled(Container)`
  border-bottom: 2px solid ${(props) => props.theme.colors.lightGray};
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Advertisement />
        <Navbar />
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
