import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import "./App.css";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pokemon-details/:id">
            <PokemonDetails />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
