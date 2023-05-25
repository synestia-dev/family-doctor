const API_URL = "http://localhost:1337/api";

export async function getRequest(url) {
  try {
    const response = await fetch(`${API_URL}/${url}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
