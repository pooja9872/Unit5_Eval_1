import './App.css';
import { Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Movies from './components/Movies';
import Login from './components/Login';
import MovieDeails from './components/MovieDeails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
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
        <MovieDeails />
      </Route>
      <Route path="/moviedetails">
        <Navbar />
        <MovieDeails />
      </Route>

    </div>
  );
}

export default App;
