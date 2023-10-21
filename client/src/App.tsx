import { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import CharacterGrid from "./components/CharacterGrid";
import { GlobalStyles } from "./styles.global";
import { Character } from "./types/Character";
import styled from "styled-components";
import useCharacters from "./hooks/useCharacters";
import { AnimatePresence } from "framer-motion";

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
    // Enable animation after a short delay when character changes
    if (selectedCharacter) {
      setTimeout(() => setAnimate(true), 100);
    }
  }, [selectedCharacter]); // Re-run effect when selectedCharacter changes

  // ...existing code...

  // const handleSelectedCharacter = (character: Character) => {
  //   setSelectedCharacter(character);
  // };

  return (
    <>
      <GlobalStyles />
      <Layout>
        <AnimatePresence>
          {selectedCharacter && (
            <CharacterCard
              animate={animate}
              key={selectedCharacter.id}
              character={selectedCharacter}
            />
          )}
        </AnimatePresence>
        <CharacterGrid onSelectedCharacter={handleSelectedCharacter} />
      </Layout>
    </>
  );
}

export default App;
