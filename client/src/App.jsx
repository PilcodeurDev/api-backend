import PizzasList from "./features/pizzas/PizzasList";
import UsersList from "./features/users/UsersList";

function App() {
  return (
    <>
      <h1>React and Rails app for learn data exchange</h1>
      <p>FInd this application layout in client/src/App.jsx</p>
      <UsersList />
      <p>
        ////////////////////////////////////////////////////////////////////////
      </p>
      
      <PizzasList />
    </>
  );
}

export default App;
