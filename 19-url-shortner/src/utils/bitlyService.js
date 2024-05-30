import axios from "axios";

const BITLY_API_URL = "https://api-ssl.bitly.com/v4/shorten";
const BITLY_ACCESS_TOKEN = process.env.REACT_APP_BITLY_ACCESS_TOKEN;

const shortenUrl = async (longUrl) => {
  try {
    const response = await axios.post(
      BITLY_API_URL,
      { long_url: longUrl },
      {
        headers: {
          Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.link;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error response:", error.response.data);
      console.error("Status:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error request:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error message:", error.message);
    }
    throw error;
  }
};

export { shortenUrl };
