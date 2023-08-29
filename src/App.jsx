import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Product from './pages/Product';
import Price from './pages/price';
import Homepage from './pages/homepage';
export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path="Product" element={<Product/>} />
    <Route path="Price" element={<Price/>}/>
  </Routes>
  </BrowserRouter>
}
