import axios from "axios";
import { SongCardProps } from "../types/songTypes";
export interface FetchSongsResponse {
  songCardProps: SongCardProps[];
  totalPages: number;
}
export const fetchSongs = async (
  pageNumber: number
): Promise<SongCardProps[]> => {
  try {
    const response = await axios.get(`http://localhost:3000/`, {
      params: {
        page: pageNumber,
      },
    });

    const data: SongCardProps[] = response.data;
    console.log(data);
    return data; // Return the songs from the response
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error; // Rethrow the error to be handled by the component
  }
};
