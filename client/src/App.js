import "./App.css";
import Login from "./screens/Login";
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
  import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
  import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
  // import '../node_modules/bootstrap-dark-5/js/bootstrap.bundle.min.js'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
