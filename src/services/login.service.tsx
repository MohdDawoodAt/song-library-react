import axios from "axios";

export const adminLogin = async (
  username: string,
  password: string
): Promise<string | undefined> => {
  try {
    const apiBaseUrl =
      import.meta.env.VITE_SONGS_LIBRARY_API || "http://localhost:3000";

    const response = await axios.post(
      apiBaseUrl + `/login`,
      {
        username,
        password,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    return response.data.access_token;
  } catch {
    console.error("Login failed:");
  }
  return undefined;
};
