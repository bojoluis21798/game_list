type FilterType = {
  name: string;
  score: {
    min: number;
    max: number;
  };
  orderBy: {
    type: "Release Date" | "Score" | "Name";
    ascending: boolean;
  };
};

export default FilterType;
