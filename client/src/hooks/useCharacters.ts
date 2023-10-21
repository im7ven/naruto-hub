import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Character {
  id: string;
  name: string;
  village: string;
  image: string;
  status: boolean;
  overall: number;
  iq: number;
  abilities: number;
  natureIcons: string[];
  natureLabels: string[];
  description: string;
  imageIcon: string;
}

interface Characters {
  amount: string;
  data: Character[];
}

const useCharacters = () => {
  const fetchCharacters = () =>
    axios
      .get<Characters>("http://localhost:3000/characters")
      .then((res) => res.data);
  return useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
  });
};

export default useCharacters;
