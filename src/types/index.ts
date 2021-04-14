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

export type GameType = {
  first_release_date: number;
  id: number;
  name: string;
  rating: number;
  summary: string;
};
