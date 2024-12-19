import axios from "axios";

export const adminLogin = async (
  username: string,
  password: string
): Promise<string | undefined> => {
  try {
    const response = await axios.post(
      `http://localhost:3000/login`,
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
