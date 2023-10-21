import styled from "styled-components";
import useCharacters from "../hooks/useCharacters";
import { Character } from "../types/Character";

const Grid = styled.section`
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 1.3rem;
  padding: 3rem 2rem;
  background: #1b1b1b;
  border-radius: 1rem;
`;

const CharacterIcon = styled.img`
  width: 6rem;
  border-radius: 8px;
  border: 1px solid white;
  box-shadow: 0 0 5px 1px red;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

interface Props {
  onSelectedCharacter: (char: Character) => void;
}

const CharacterGrid = ({ onSelectedCharacter }: Props) => {
  const { data } = useCharacters();

  return (
    <Grid>
      {data?.data.map((char, index) => (
        <CharacterIcon
          onClick={() => onSelectedCharacter(char)}
          key={index}
          src={char?.imageIcon}
        ></CharacterIcon>
      ))}
    </Grid>
  );
};

export default CharacterGrid;
