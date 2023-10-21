import styled from "styled-components";
import useCharacters from "../hooks/useCharacters";
import villageIcon from "../images/village.png";
import Expandable from "./Expandable";
import { Character, Characters } from "../types/Character";
import { useQueryClient } from "@tanstack/react-query";

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: auto, auto;
  align-items: center;
  background: #000;
  width: 58rem;
  color: #fff;
  border-radius: 25px;
  padding: 3rem 0 0;
  box-shadow: 0 0 20px 1px grey;
`;

const CardContent = styled.div`
  padding: 0 3rem 0 1rem;
`;

const CharacterImage = styled.img`
  max-width: 35rem;
  transform: translateX(-50%);
  max-height: 50rem;
  min-height: 40rem;
`;

const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-b
`;

const StatusOverline = styled.p`
  font-size: 1.5rem;
  font-family: "Gabarito", sans-serif;
  letter-spacing: 1.3rem;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0;
  color: #37d17f;

  &.deceased {
    color: #ff4a4a;
  }
`;

const CharacterName = styled.h2`
  font-family: "Neuton", serif;
  font-weight: 900;
  font-size: 4.5rem;
  margin: 0;
  line-height: 3.4rem;
  max-width: 24.5rem;
`;

const VillageContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
`;

const VillageIcon = styled.img`
  width: 100%;
  max-width: 4rem;
`;

const Village = styled.p`
  margin: 0;
  font-family: "Gabarito", sans-serif;
  font-size: 2rem;
  color: #cdbef0;
`;

// const CharacterDescription = styled.p`
//   font-family: "Gabarito", sans-serif;
//   font-size: 1.7rem;
//   line-height: 2.4rem;
//   margin: 0;
// `;

const StatWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 2.4rem 0 1rem;
`;

const StatLabel = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  font-family: "Gabarito", sans-serif;
  margin: 0;
  color: #ff3923;
  text-align: center;

  &.footer {
    margin-bottom: 0.8rem;
    color: #d7d7d7;
  }
`;

const Stat = styled.p`
  font-size: 5rem;
  align-self: center;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 45%,
    rgba(0, 0, 0, 0) 87%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-family: "Gabarito", sans-serif;
  font-weight: 700;
`;

const CardFooter = styled.footer`
  margin-top: 2rem;
  background: #2c2c2c;

  grid-area: 2 / 1 / 3 / 3;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 1rem;
  box-sizing: border-box;
`;

const NatureWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 0 auto;
  color: #fff;
  font-size: 3rem;
  flex-wrap: wrap;
  max-width: 40rem;
`;

const NatureGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NatureIcon = styled.img`
  width: 30px;
`;

const NatureLabel = styled.p`
  font-size: 1.5rem;
  margin: 0;
  font-family: "Gabarito", sans-serif;
`;

interface Props {
  character: Character | null;
}

const CharacterCard = ({ character }: Props) => {
  const queryClient = useQueryClient(); // Access the query client
  const data = queryClient.getQueryData<Characters>(["characters"]);

  const firstCard = data?.data[0];

  const displayCard = !character ? firstCard : character;

  return (
    <div>
      <CardContainer>
        <CharacterImage src={displayCard?.image} />
        <CardContent>
          <CardHeader>
            <CharacterName>{displayCard?.name}</CharacterName>
            <StatusOverline className={displayCard?.status ? "" : "deceased"}>
              {displayCard?.status ? "Alive" : "Deceased"}
            </StatusOverline>
          </CardHeader>
          <StatWrapper>
            <div>
              <StatLabel>Overall</StatLabel>
              <Stat>{displayCard?.overall}</Stat>
            </div>
            <div>
              <StatLabel>IQ</StatLabel>
              <Stat>{displayCard?.iq}</Stat>
            </div>
            <div>
              <StatLabel>Abilities</StatLabel>
              <Stat>{displayCard?.abilities}</Stat>
            </div>
          </StatWrapper>
          <VillageContainer>
            <VillageIcon src={villageIcon} />
            <Village>{displayCard?.village}</Village>
          </VillageContainer>
          <Expandable
            maxChars={260}
            decription={displayCard ? displayCard.description : ""}
          />
        </CardContent>
        <CardFooter>
          <StatLabel className="footer">Nature Transformations</StatLabel>
          <NatureWrapper>
            {displayCard?.natureIcons.map((icon, index) => (
              <NatureGroup key={index}>
                <NatureIcon src={icon} />
                <NatureLabel>{displayCard.natureLabels[index]}</NatureLabel>
              </NatureGroup>
            ))}
          </NatureWrapper>
        </CardFooter>
      </CardContainer>
    </div>
  );
};

export default CharacterCard;
