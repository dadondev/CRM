import styled from "styled-components";

interface Props {
  children: string;
  onClick?: any;
}

const Btn = styled.button`
  padding: 14px 20px;
  min-width: 100px;
  background-color: ${(props) => props.theme.colors.gray99};
  border-radius: 6px;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.gray15};
  border: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const ViewAllBtn: React.FC<Props> = ({ children, onClick }) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

export default ViewAllBtn;
