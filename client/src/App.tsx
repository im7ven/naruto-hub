import { useEffect, useState } from "react";
import styled from "styled-components";
import CharacterCard from "./components/CharacterCard";
import CharacterGrid from "./components/CharacterGrid";
import useCharacters from "./hooks/useCharacters";
import { GlobalStyles } from "./styles.global";
import { Character } from "./types/Character";

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

  const [animate, setAnimate] = useState(true);

  const handleSelectedCharacter = (character: Character) => {
    if (character === selectedCharacter) {
      return;
    }
    setAnimate(false); // Disable animation
    setTimeout(() => {
      setSelectedCharacter(character);
    }, 400);
  };

  useEffect(() => {
    if (selectedCharacter) {
      setTimeout(() => setAnimate(true), 100);
    }
  }, [selectedCharacter]);

  return (
    <>
      <GlobalStyles />
      <Layout>
        <CharacterCard
          animate={animate}
          key={selectedCharacter?.id}
          character={selectedCharacter}
        />

        <CharacterGrid onSelectedCharacter={handleSelectedCharacter} />
      </Layout>
    </>
  );
}

export default App;
