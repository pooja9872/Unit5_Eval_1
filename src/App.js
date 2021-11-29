import './App.css';
import { Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Movies from './components/Movies';
import Login from './components/Login';
import MovieDeails from './components/MovieDeails';
import Navbar from './components/Navbar';
import List from "./components/List"

function App() {
  return (
    <div className="App">
      <Route path="/list" exact >
        <List />
      </Route>
      <Route path="/" exact >
        <Dashboard />
        <Movies />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
        <Movies />
      </Route>
      <Route path="/moviedetails">
        <Navbar />
        <MovieDeails />
      </Route>

    </div>
  );
}

export default App;
