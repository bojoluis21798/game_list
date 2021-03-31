export enum OrderBy {
  RELEASE_DATE = "Release Date",
  SCORE = "Score",
  NAME = "Name",
}

export type FilterType = {
  name: string;
  score: {
    min: number;
    max: number;
  };
  orderBy: OrderBy;
  ascending: boolean;
};
