import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//IMPORTACIONES DE PAGINAS 
import Inicio from "./pages/Inicio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;