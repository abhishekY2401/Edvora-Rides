import Navbar from "./components/Navbar";
import "./App.css";
import { useState } from "react";
import Rides from "./components/Rides";
import axios from "axios";

function App() {
  // a state object for rides
  const [rides, setRides] = useState();

  const getRidesInfo = () => {
    axios.get(`https://assessment.api.vweb.app/rides`).then((data) => {
      setRides(data);
    });
  };

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
