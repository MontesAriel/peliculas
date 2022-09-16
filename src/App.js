import './App.css';
import ListadoPeliculas from './views/ListadoPeliculas';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './views/Blog';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<Blog />} />  
        <Route path="/" element={<ListadoPeliculas />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
