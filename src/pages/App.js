import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Routes from './../routes/routes'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
