export async function fetchMovies(endpoint) {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch data");
    }

    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}
