import styled from "styled-components";
import Container from "../../general/components/Container";
import StyledHeading from "./components/Heading";
import SlidesContainer from "./components/SlidesContainer";

const StyledContainer = styled(Container)`
  margin-top: 50px;
`;

const Content = styled.div`
  max-width: 659px;
  margin: 0 auto;
`;

const Form = styled.form``;
const Login = () => {
  return (
    <StyledContainer>
      <Content>
        <StyledHeading />
        <SlidesContainer />
      </Content>
      <Form></Form>
    </StyledContainer>
  );
};

export default Login;
