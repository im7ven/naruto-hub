export interface Character {
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

export interface Characters {
  amount: string;
  data: Character[];
}
