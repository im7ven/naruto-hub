import styled from "styled-components";
import { Character, Characters } from "../types/Character";
import { useQueryClient } from "@tanstack/react-query";

const Grid = styled.section`
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 1.3rem;
  padding: 3rem 2rem;
  background: #232323;
  border-radius: 1rem;
`;

const CharacterIcon = styled.img`
  width: 6rem;
  border-radius: 8px;
  border: 1px solid white;
  box-shadow: 0 0 5px 1.5px #6200f5;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

interface Props {
  onSelectedCharacter: (char: Character) => void;
}

const CharacterGrid = ({ onSelectedCharacter }: Props) => {
  //   const { data } = useCharacters();
  const queryClient = useQueryClient(); // Access the query client
  const data = queryClient.getQueryData<Characters>(["characters"]);

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
