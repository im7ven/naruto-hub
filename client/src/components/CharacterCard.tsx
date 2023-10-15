import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styled from "styled-components";
import villageIcon from "../images/village.png";
import test from "../images/deidaraPs.webp";
import earth from "../images/Nature_Icon_Earth.svg";

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: auto, auto;
  align-items: center;
  background: #000;
  width: 50rem;
  color: #fff;
  border-radius: 25px;
  padding: 3rem 0 0;
  box-shadow: 0 0 20px 1px grey;
`;

const CardContent = styled.div`
  padding: 0 3rem 0 1rem;
`;

const CharacterImage = styled.img`
  max-width: 30rem;
  transform: translateX(-50%);
`;

const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatusOverline = styled.p`
  font-size: 1.5rem;
  font-family: "Gabarito", sans-serif;
  letter-spacing: 1.3rem;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0;
  color: #37d17f;
`;

const CharacterName = styled.h2`
  font-family: "Neuton", serif;
  font-weight: 900;
  font-size: 4.5rem;
  margin: 0;
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
`;

const CharacterDescription = styled.p`
  font-family: "Gabarito", sans-serif;
  font-size: 1.7rem;
  line-height: 2.4rem;
  margin: 0;
`;

const StatWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1rem 0;
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

  &.abilities {
    font-size: 1.7rem;
  }
`;

const CardFooter = styled.footer`
  margin-top: 2rem;
  background: #2c2c2c;
  // height: 9rem;
  grid-area: 2 / 1 / 3 / 3;
  border-bottom-right-radius: 25px;
  padding: 1rem 0;
  box-sizing: border-box;
`;

const NatureWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  color: #fff;
  font-size: 3rem;
`;

const NatureGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NatureIcon = styled.img`
  width: 35px;
`;

const NatureLabel = styled.p`
  font-size: 1.6rem;
  margin: 0;
  font-family: "Gabarito", sans-serif;
`;

interface Character {
  id: string;
  name: string;
  village: string;
  image: string;
}

interface Characters {
  amount: string;
  data: Character[];
}

const CharacterCard = () => {
  const { data } = useQuery({
    queryKey: ["characters"],
    queryFn: () => {
      return axios
        .get<Characters>("http://localhost:3000/characters")
        .then((res) => res.data);
    },
  });

  return (
    <div>
      <CardContainer>
        <CharacterImage src={test} />
        <CardContent>
          <CardHeader>
            <CharacterName>Dedara</CharacterName>
            <StatusOverline>Alive</StatusOverline>
          </CardHeader>
          <StatWrapper>
            <div>
              <StatLabel>Power</StatLabel>
              <Stat>95</Stat>
            </div>
            <div>
              <StatLabel>IQ</StatLabel>
              <Stat>95</Stat>
            </div>
            <div>
              <StatLabel>Abilities</StatLabel>
              <Stat className="abilities">Ninjustu</Stat>
            </div>
          </StatWrapper>
          <VillageContainer>
            <VillageIcon src={villageIcon} />
            <Village>The Hidden Sand</Village>
          </VillageContainer>
          <CharacterDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
            officiis numquam aliquam ducimus quis, delectus obcaecati! Eius est
            impedit dolor a dolores voluptatum nihil natus, dicta iste nisi unde
            laudantium exercitationem quis aliquam possimus eaque quia alias
            minus. Placeat, accusantium.
          </CharacterDescription>
        </CardContent>
        <CardFooter>
          <StatLabel className="footer">Nature Transformations</StatLabel>
          <NatureWrapper>
            <NatureGroup>
              <NatureIcon src={earth} />
              <NatureLabel>Earth</NatureLabel>
            </NatureGroup>
            <NatureGroup>
              <NatureIcon src={earth} />
              <NatureLabel>Earth</NatureLabel>
            </NatureGroup>
            <NatureGroup>
              <NatureIcon src={earth} />
              <NatureLabel>Earth</NatureLabel>
            </NatureGroup>
            <NatureGroup>
              <NatureIcon src={earth} />
              <NatureLabel>Earth</NatureLabel>
            </NatureGroup>
            <NatureGroup>
              <NatureIcon src={earth} />
              <NatureLabel>Earth</NatureLabel>
            </NatureGroup>
            <NatureGroup>
              <NatureIcon src={earth} />
              <NatureLabel>Earth</NatureLabel>
            </NatureGroup>
            <NatureGroup>
              <NatureIcon src={earth} />
              <NatureLabel>Earth</NatureLabel>
            </NatureGroup>
            <NatureGroup>
              <NatureIcon src={earth} />
              <NatureLabel>Earth</NatureLabel>
            </NatureGroup>
          </NatureWrapper>
        </CardFooter>
      </CardContainer>
    </div>
  );
};

export default CharacterCard;
