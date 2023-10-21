import { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import CharacterGrid from "./components/CharacterGrid";
import { GlobalStyles } from "./styles.global";
import { Character } from "./types/Character";
import styled from "styled-components";
import useCharacters from "./hooks/useCharacters";

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 4rem;
  align-items: center;
`;

function App() {
  useCharacters();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const handleSelectedCharacter = (character: Character) => {
    setSelectedCharacter(character);
  };

  return (
    <>
      <GlobalStyles />
      <Layout>
        <CharacterCard character={selectedCharacter} />
        <CharacterGrid onSelectedCharacter={handleSelectedCharacter} />
      </Layout>
    </>
  );
}

export default App;
