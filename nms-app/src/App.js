import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './containers/layout/sideNav.js/sidebar';

function App() {
  return (
    <Router>
    <div className="App">
    <Sidebar />

    </div>
  </Router>
  );
}

export default App;
