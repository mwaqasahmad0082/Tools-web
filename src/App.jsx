import { useState } from "react";
import "./App.css";
import Productdata from "./components/productdata";
import "bootstrap/dist/css/bootstrap.css";
import Section from "./components/section";
import Services from "./components/Services";
import About from "./components/About";
import Contect from "./components/Contect";
import Slider from "./components/Slider";
import Expert from "./components/Expert";
import Contectus from "./components/Contectus";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Productdata/>
      <Section/>
      <Services/>
      <About/>
      <Contect/>
      <Slider/>
      <Expert/>
      <Contectus/>
    </div>
  );
}

export default App;
