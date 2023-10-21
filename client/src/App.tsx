import { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import CharacterGrid from "./components/CharacterGrid";
import { GlobalStyles } from "./styles.global";
import { Character } from "./types/Character";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const handleSelectedCharacter = (character: Character) => {
    setSelectedCharacter(character);
  };

  return (
    <>
      <GlobalStyles />
      <CharacterCard character={selectedCharacter} />
      <CharacterGrid onSelectedCharacter={handleSelectedCharacter} />
    </>
  );
}

export default App;
