type FilterType = {
  name: string;
  score: {
    min: number;
    max: number;
  };
  orderBy: "Release Date" | "Score" | "Name";
  ascending: boolean;
};

export { FilterType };
