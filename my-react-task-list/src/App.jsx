import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Menu } from "./components/Menu";
import { Home } from "./page/Home";
import { SobreNosotros } from "./page/SobreNosotros";
import { Lista } from "./page/Lista";





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