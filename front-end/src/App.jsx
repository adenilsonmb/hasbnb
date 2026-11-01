import Header from "./components/Header";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Grid from "./components/Grid";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

      <Route path="/" element={<Grid/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
      
      
     
    </BrowserRouter>
  );
}

export default App;
