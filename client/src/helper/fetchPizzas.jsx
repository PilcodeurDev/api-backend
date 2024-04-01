// Fetch pizas from the API

export default function fetchPizzas(API_URL, setPizzas, setLoading, setError) {
  async function fetchPizzas() {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const json = await response.json();
        json.sort((a, b) => a.id - b.id);
        setPizzas(json);
      } else {
        throw response;
      }
    } catch (error) {
      setError("Error fetching pizzas");
      console.log("Error fetching pizzas:", error);
    } finally {
      setLoading(false);
    }
  }
  return fetchPizzas();
}
