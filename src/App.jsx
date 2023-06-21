import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Menu } from "./components/Menu";
import { Home } from "./pages/Home";
import { SobreNosotros } from "./pages/SobreNosotros";
import { Lista } from "./pages/lista";
// import {TareasAgregadas} from "./pages/TareasAgregadas";




function App() {
  return (
    
    <BrowserRouter>

    
    
      <Menu />
      
     <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/SobreNosotros" element={<SobreNosotros />} />
      <Route path="/Lista" element={<Lista />} />
      
      {/* <Route path="/TareasAgregadas" element={<TareasAgregadas />} /> */}
      
      </Routes>
      
    </BrowserRouter>
    
    
  );
}

export default App;