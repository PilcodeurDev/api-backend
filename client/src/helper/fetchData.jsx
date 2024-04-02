// Fetch pizas from the API

export default function fetchData(API_URL, setData, setLoading, setError) {
  async function fetchData() {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const json = await response.json();
        json.sort((a, b) => a.id - b.id);
        setData(json);
      } else {
        throw response;
      }
    } catch (error) {
      setError("Error fetching data");
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }
  return fetchData();
}
