import axios from "axios";

export async function getStats(queryParams) {
  let baseURL = `http://localhost:3001/stats`

  const result = await axios.get(baseURL, { params: queryParams });
  return result;
}