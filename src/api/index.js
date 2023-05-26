export async function getRequest(url) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/${url}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
    throw error;
  }
}
