import { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import fetchPizzas from "../../helper/fetchPizzas";

export default function PizzasList() {
  const [pizzas, setPizzas] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(() => {
    fetchPizzas(API_URL, setPizzas, setLoading, setError);
  }, []);

  return (
    <>
      <h2>Pizzas List</h2>
      <ul>
        {pizzas.map(({ id, name, smallPrice, mediumPrice, ingredient }) => (
          <li key={id}>
            <h2>{name}</h2>
            <p>{smallPrice}</p>
            <p>{mediumPrice}</p>
            <p>{ingredient}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
