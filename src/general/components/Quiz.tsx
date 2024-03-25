import { useState } from "react";
import styled, { css } from "styled-components";
import laptop from "../utils/laptop";
interface FarCardInt {
  isShow: boolean;
}

const FaqCardContainer = styled.div`
  display: grid;
  overflow: hidden;
  transition: 500ms all;
  grid-template-rows: auto;
  cursor: pointer;
  padding: 24px;
  border: 1px solid ${(p) => p.theme.colors.white95};
  border-radius: 10px;
`;

const QuizRow = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  font-size: 1.6rem;
  color: ${(p) => p.theme.colors.gray15};
  ${laptop} {
    font-size: 2rem;
  }
`;
const SwitcherBtn = styled.button<FarCardInt>`
  padding: 11px;
  background-color: ${(p) => p.theme.colors.orange95};
  border-radius: 6px;
  & > img {
    transition: 500ms all;
    width: 20px;
    transform: ${(p) => (p.isShow ? "rotateZ(45deg)" : "")};
  }
`;
const AnsRow = styled.article<FarCardInt>`
  height: 0;
  transition: 500ms all;
  overflow-y: hidden;
  /* ------ */

  & > span {
    font-size: 1.4rem;
    color: ${(p) => p.theme.colors.gray30};
    ${laptop} {
      font-size: 1.8rem;
    }
  }

  ${(p) => {
    if (p.isShow) {
      return css`
        margin-top: 20px;
        padding-top: 20px;
        height: 226px;
        border-top: 1px solid ${(p) => p.theme.colors.white95};
      `;
    }
  }}
`;

const TargetBtn = styled.button`
  width: 100%;
  padding: 12px 20px;
  background-color: ${(p) => p.theme.colors.white97};
  margin-top: 20px;
  border-radius: 6px;
  text-align: left;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.gray20};
  & > p {
    padding: 15px;
    border-radius: 50%;
    background-color: ${(p) => p.theme.colors.white};
  }

  ${laptop} {
    font-size: 1.8rem;
  }
`;

interface GetQuizInt {
  quiz: string;
}

const Quiz: React.FC<GetQuizInt> = ({ quiz }) => {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <FaqCardContainer onClick={handleClick}>
      <QuizRow>
        {quiz}
        <SwitcherBtn isShow={show}>
          <img src="/plus.svg" alt="plus" />
        </SwitcherBtn>
      </QuizRow>
      <AnsRow isShow={show} onClick={(e) => e.stopPropagation()}>
        <span>
          Absolutely! You can enroll in multiple courses simultaneously and
          access them at your convenience.
        </span>
        <TargetBtn>
          Enrollment Process for Different Courses
          <p>
            <img src="/arrow-btn.svg" alt="arrow" />
          </p>
        </TargetBtn>
      </AnsRow>
    </FaqCardContainer>
  );
};

export default Quiz;
