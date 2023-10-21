import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Characters } from "../types/Character";

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
