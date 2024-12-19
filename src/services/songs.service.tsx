import axios from "axios";
import { Song } from "../types/songTypes";
export interface FetchSongsResponse {
  songCardProps: Song[];
  totalPages: number;
}
export const fetchSongs = async (pageNumber: number): Promise<Song[]> => {
  try {
    const response = await axios.get(`http://localhost:3000/`, {
      params: {
        page: pageNumber,
      },
    });

    const data: Song[] = response.data;
    console.log(data);
    return data; // Return the songs from the response
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error; // Rethrow the error to be handled by the component
  }
};

export const addSong = async (songData: Song) => {
  const token = sessionStorage.getItem("accessToken");
  console.log(JSON.stringify(token));
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
