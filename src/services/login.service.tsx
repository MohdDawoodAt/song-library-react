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
    // console.log(username + " " + password);

    if (response.status === 201) {
      // Save the token or authentication state here (perhaps in Context or localStorage)
      // console.log("Login successful:", response.data);
      return response.data;
    }
  } catch {
    console.error("Login failed:");
  }
  return undefined;
};
