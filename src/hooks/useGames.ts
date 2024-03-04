import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}

const useGames = (
  gamequery: GameQuery
  ) => 
  {
    return useData<Game>("/games", {
      params: {
        genres: gamequery.genre?.id,
        platforms: gamequery.platform?.id
      }
    },
      [gamequery]);
  };

export default useGames;
