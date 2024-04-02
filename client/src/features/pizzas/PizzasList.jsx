import { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import fetchData from "../../helper/fetchData";

export default function PizzasList() {
  const [pizzas, setPizzas] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  useEffect(() => {
    fetchData(API_URL, setPizzas, setLoading, setError);
  }, []);

  return (
    <>
      <h2>Pizzas List</h2>
      <ul>
        {pizzas.map(({ id, name, smallprice, mediumprice, ingredients }) => (
          <li key={id}>
            <h2>{name}</h2>
            <p>petite: {smallprice}€</p>
            <p>grande: {mediumprice}€</p>
            <p>ingredients: {ingredients}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
