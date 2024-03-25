import styled, { css } from "styled-components";
import desktop from "../../../general/utils/desktop";
import laptop from "../../../general/utils/laptop";

interface RemoteInt {
  active: boolean;
}
interface Props {
  name: string;
  steps: EPT[];
  index: number;
  active: number;
  setActive: (e: number) => void;
}

const StyledPart = styled.div`
  padding: 30px;
  border-radius: 10px;
  max-width: 358px;
  width: 100%;
  background-color: ${(p) => p.theme.colors.white};
  & > div:nth-child(2) {
    display: grid;
    gap: 16px;
    ${laptop} {
      gap: 20px;
    }
    ${desktop} {
      gap: 25px;
    }
  }

  ${laptop} {
    max-width: 490px;
  }

  ${desktop} {
    max-width: 590px;
  }
`;

const ContHeading = styled.div`
  margin-bottom: 30px;

  ${laptop} {
    margin-bottom: 40px;
  }
  ${desktop} {
    margin-bottom: 50px;
  }
`;

const Count = styled.h1`
  text-align: right;
  color: ${(p) => p.theme.colors.gray15};
  font-size: 5rem;

  ${laptop} {
    font-size: 6rem;
  }
  ${desktop} {
    font-size: 8rem;
  }
`;

const Title = styled.h3`
  font-size: 1.8rem;
  color: ${(p) => p.theme.colors.gray20};
  ${laptop} {
    font-size: 2rem;
  }
  ${desktop} {
    font-size: 2.4rem;
  }
`;

const RemoteController = styled.div<RemoteInt>`
  border: 1px solid ${(p) => p.theme.colors.white95};
  padding: 20px;
  display: grid;
  gap: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: 300ms all;
  ${laptop} {
    padding-inline: 24px;
  }
  ${desktop} {
    padding: 24px 30px;
  }
  transition: 500ms all;
  &:hover {
    transform: translateY(-10px);
  }
  ${(p) =>
    p.active
      ? css`
          box-shadow: 0px 0px 0px 4px rgba(255, 244, 229, 1);
          & > div > p {
            background-color: ${(p) => p.theme.colors.orange90};
          }
        `
      : ""}
`;

const Controller = styled.div`
  ${laptop} {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
  }
  & > article {
    margin-bottom: 24px;
    ${laptop} {
      margin-bottom: 0;
    }
    & > h3 {
      font-size: 1.6rem;
      color: ${(p) => p.theme.colors.gray20};

      ${desktop} {
        font-size: 2rem;
      }
    }
    & > span {
      font-size: 1.6rem;
      color: ${(p) => p.theme.colors.gray35};
      ${desktop} {
        font-size: 1.8rem;
      }
    }
  }
`;

const HowMuch = styled.p`
  display: inline-flex;
  align-items: center;
  transition: 300ms;
  max-width: 130px;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  background-color: ${(p) => p.theme.colors.white97};
  gap: 4px;

  ${desktop} {
    padding-inline: 14px;
    max-width: 130px;
  }

  & > span {
    font-size: 1.4rem;
    color: ${(p) => p.theme.colors.gray35};
  }
`;

type EPT = {
  name: string;
  how: string;
};

const Part: React.FC<Props> = ({ active, index, name, setActive, steps }) => {
  return (
    <StyledPart>
      <ContHeading>
        <Count>0{index + 1}</Count>
        <Title>{name}</Title>
      </ContHeading>
      <div>
        {steps.map((e: EPT, i) => (
          <RemoteController
            active={active === index * 3 + i + 1}
            onClick={() => {
              setActive(index * 3 + i + 1);
            }}
          >
            <Controller key={i}>
              <article>
                <h3>{e.name}</h3>
                <span>Lesson 0{i + 1}</span>
              </article>
              <HowMuch>
                <img src="/hour.svg" alt="an hour" />
                <span>{e.how}</span>
              </HowMuch>
            </Controller>
          </RemoteController>
        ))}
      </div>
    </StyledPart>
  );
};

export default Part;
