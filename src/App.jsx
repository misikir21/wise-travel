import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Product from './pages/Product';
import Price from './pages/price';
import Homepage from './pages/homepage';
import Pagenotfound from './pages/Pagenotfound';
export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path="Product" element={<Product/>} />
    <Route path="Price" element={<Price/>}/>
    <Route path="*" element={<Pagenotfound/>}/>
  </Routes>
  </BrowserRouter>
}
