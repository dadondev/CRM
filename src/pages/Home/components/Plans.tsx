import styled, { css, keyframes } from "styled-components";
import laptop from "../../../general/utils/laptop";
import desktop from "../../../general/utils/desktop";

interface FeatureInt {
  isTrue: boolean;
}

interface ConInt {
  isLeft: boolean;
}

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 12px;
  padding: 20px;
  gap: 30px;
  background-color: ${(props) => props.theme.colors.white};
`;
const Card = styled.div`
  transition: 500ms all;
  max-width: 400px;
  width: 100%;
  padding: 30px 20px 20px;
  text-align: center;
  border-radius: 12px;
  background-color: ${(p) => p.theme.colors.white99};

  ${laptop} {
    max-width: 500px;
  }
  ${desktop} {
    max-width: 590px;
  }
`;

const Plan = styled.h1`
  padding: 8px;
  font-size: 1.6rem;
  border: 1px solid ${(p) => p.theme.colors.orange90};
  background-color: ${(p) => p.theme.colors.orange97};
  color: ${(p) => p.theme.colors.gray15};
  border-radius: 4px;
  transition: 500ms all;
  margin-bottom: 30px;

  ${laptop} {
    font-size: 1.8rem;
  }

  ${desktop} {
    font-size: 2.2rem;
  }
`;
const Cost = styled.article`
  margin-bottom: 30px;
  transition: 500ms all;
  & > h1 {
    display: inline-block;
    transition: 500ms all;
    font-size: 5rem;
    color: ${(p) => p.theme.colors.gray15};
  }
  & > span {
    color: ${(p) => p.theme.colors.gray30};
    font-size: 1.4rem;
  }
  ${laptop} {
    margin-bottom: 50px;
    & > h1 {
      font-size: 6rem;
    }
    & > span {
      transition: 500ms all;
      font-size: 1.6rem;
    }
  }

  ${desktop} {
    & > h1 {
      font-size: 8rem;
    }
    & > span {
      transition: 500ms all;
      font-size: 2rem;
    }
  }
`;
const About = styled.div`
  overflow: hidden;
  border: 1px solid ${(p) => p.theme.colors.white95};
  border-radius: 10px 10px 8px 8px;
  padding: 20px 0 0;
  transition: 500ms all;
  background-color: ${(p) => p.theme.colors.white};

  ${laptop} {
    padding: 30px 0 0;
  }
  ${laptop} {
    padding: 40px 0 0;
  }
`;
const Title = styled.h1`
  font-size: 1.8rem;
  transition: 500ms all;
  color: ${(p) => p.theme.colors.gray15};
  transition: 500ms all;
  ${desktop} {
    font-size: 2rem;
  }
`;
const Features = styled.div`
  padding: 20px;
  display: grid;
  transition: 500ms all;
  gap: 20px;

  ${laptop} {
    padding: 30px;
  }
  ${desktop} {
    padding: 30px 40px;
  }
`;
const Feature = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  transition: 500ms all;
  gap: 10px;
  padding: 12px;
  font-size: 1.4rem;
  border: 1px solid ${(p) => p.theme.colors.white95};
  border-radius: 6px;
  color: ${(p) => p.theme.colors.gray30};
  text-align: left;

  ${desktop} {
    font-size: 1.8rem;
    padding: 14px;
  }
`;

const Badge = styled.article<FeatureInt>`
  padding: 4px;
  border-radius: 4px;
  ${(p) => {
    if (p.isTrue)
      return css`
        background-color: ${(p) => p.theme.colors.orange95};
      `;
    else
      return css`
        border: 1px solid ${(p) => p.theme.colors.white95};
      `;
  }}
  ${desktop} {
    padding: 6px;
  }
`;

const Btn = styled.button`
  background-color: ${(p) => p.theme.colors.orange50};
  display: block;
  width: 100%;
  padding: 18px;
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.white};

  transition: 500ms all;

  &:hover {
    opacity: 0.7;
  }
  ${desktop} {
    font-size: 1.8rem;
  }
`;

const forCards = [
  {
    plan: "Free Plan",
    cost: 0,
    how: "month",
    features: [
      {
        isTrue: true,
        text: "Access to selected free courses.",
      },
      {
        isTrue: true,
        text: "Limited course materials and resources.",
      },
      {
        isTrue: true,
        text: "Basic community support.",
      },
      {
        isTrue: true,
        text: "No certification upon completion.",
      },
      {
        isTrue: true,
        text: "Ad-supported platform.",
      },
      {
        isTrue: false,
        text: "Access to exclusive Pro Plan community forums.",
      },
      {
        isTrue: false,
        text: "Early access to new courses and updates.",
      },
    ],
  },
  {
    plan: "Pro Plan",
    cost: 79,
    how: "month",
    features: [
      {
        isTrue: true,
        text: "Access to selected free courses.",
      },
      {
        isTrue: true,
        text: "Limited course materials and resources.",
      },
      {
        isTrue: true,
        text: "Basic community support.",
      },
      {
        isTrue: true,
        text: "No certification upon completion.",
      },
      {
        isTrue: true,
        text: "Ad-supported platform.",
      },
      {
        isTrue: true,
        text: "Access to exclusive Pro Plan community forums.",
      },
      {
        isTrue: true,
        text: "Early access to new courses and updates.",
      },
    ],
  },

  {
    plan: "Status Plan",
    cost: 200,
    how: "year",
    features: [
      {
        isTrue: true,
        text: "Access to selected free courses.",
      },
      {
        isTrue: true,
        text: "Limited course materials and resources.",
      },
      {
        isTrue: true,
        text: "Basic community support.",
      },
      {
        isTrue: true,
        text: "No certification upon completion.",
      },
      {
        isTrue: true,
        text: "Ad-supported platform.",
      },
      {
        isTrue: false,
        text: "Access to exclusive Pro Plan community forums.",
      },
      {
        isTrue: false,
        text: "Early access to new courses and updates.",
      },
    ],
  },
  {
    plan: "Super Plan",
    cost: 279,
    how: "year",
    features: [
      {
        isTrue: true,
        text: "Access to selected free courses.",
      },
      {
        isTrue: true,
        text: "Limited course materials and resources.",
      },
      {
        isTrue: true,
        text: "Basic community support.",
      },
      {
        isTrue: true,
        text: "No certification upon completion.",
      },
      {
        isTrue: true,
        text: "Ad-supported platform.",
      },
      {
        isTrue: true,
        text: "Access to exclusive Pro Plan community forums.",
      },
      {
        isTrue: true,
        text: "Early access to new courses and updates.",
      },
    ],
  },
];
const Plans: React.FC<ConInt> = ({ isLeft }) => {
  return (
    <Container>
      {forCards
        .filter((e) => (!isLeft ? e.how === "month" : e.how === "year"))
        .map((e, i) => (
          <Card key={i}>
            <Plan>{e.plan}</Plan>
            <Cost>
              <h1>${e.cost}</h1>
              <span>/{e.how}</span>
            </Cost>
            <About>
              <Title>Available Features</Title>
              <Features>
                {e.features.map((e, i) => (
                  <Feature>
                    <Badge isTrue={e.isTrue} key={i}>
                      <img
                        src={e.isTrue ? "/check.svg" : "/union.svg"}
                        alt="check"
                      />
                    </Badge>
                    {e.text}
                  </Feature>
                ))}
              </Features>
              <Btn>Get Started</Btn>
            </About>
          </Card>
        ))}
    </Container>
  );
};

export default Plans;
