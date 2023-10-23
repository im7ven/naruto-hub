import styled from "styled-components";
import { Character, Characters } from "../types/Character";
import { useQueryClient } from "@tanstack/react-query";

const GridWrapper = styled.section`
  padding: 3rem 2rem;
  background: #000;
  border-radius: 1rem;
  // border: 1px solid white;
`;

const Grid = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 1.3rem;
`;

const GridHeading = styled.h2`
  font-size: 3rem;
  color: #fff;
  font-family: "Gabarito", sans-serif;
  text-align: center;
  margin: 1rem 0;
  letter-spacing: 0.2rem;
`;

const CharacterIcon = styled.img`
  width: 6rem;
  border-radius: 8px;
  border: 1px solid white;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 5px 1.5px #6200f5;
    transform: scale(1.07);
  }
`;

interface Props {
  onSelectedCharacter: (char: Character) => void;
}

const CharacterGrid = ({ onSelectedCharacter }: Props) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<Characters>(["characters"]);

  return (
    <GridWrapper>
      <GridHeading>Character Selection</GridHeading>
      <Grid>
        {data?.data.map((char, index) => (
          <CharacterIcon
            onClick={() => onSelectedCharacter(char)}
            key={index}
            src={char?.imageIcon}
          ></CharacterIcon>
        ))}
      </Grid>
    </GridWrapper>
  );
};

export default CharacterGrid;
