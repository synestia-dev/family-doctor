export async function getRequest(url) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${url}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
