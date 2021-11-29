import './App.css';
import { Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Movies from './components/Movies';
import Login from './components/Login';

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
      </Route>

    </div>
  );
}

export default App;
