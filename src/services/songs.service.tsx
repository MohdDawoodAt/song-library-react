import axios from "axios";
import { Song } from "../types/songTypes";
export interface FetchSongsResponse {
  songs: Song[];
  totalPages: number;
}
export const fetchSongs = async (
  pageNumber: number
): Promise<FetchSongsResponse> => {
  const response = await axios.get(`http://localhost:3000/`, {
    params: {
      page: pageNumber,
    },
  });

  const data: FetchSongsResponse = response.data;

  return data;
};

export const addSong = async (songData: Song) => {
  const token = localStorage.getItem("accessToken");
  // console.log(JSON.stringify(token));
  await axios
    .post(`http://localhost:3000/`, songData, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
        "Content-Type": "application/json", // Specify the content type
      },
    })
    .then(() => {
      console.log("song added");
    })
    .catch((error) => {
      console.error("error adding song: " + error);
    });
};

export const searchSong = async (songName: string): Promise<Song[]> => {
  try {
    const response = await axios.get("http://localhost:3000/search", {
      params: {
        songName: songName,
      },
    });

    // console.log("response.data from the service:", response.data); // Log the data for debugging
    return response.data;
  } catch (error) {
    console.error("Error finding song:", error);
    return [];
  }
};
