import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/homepage';
import Pagenotfound from './pages/Pagenotfound';
import AppLayout from './pages/AppLayout';
export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path="Product" element={<Product/>} />
    <Route path="Price" element={<Pricing/>}/>
    <Route path="applications" element={<AppLayout/>}/>
    <Route path="*" element={<Pagenotfound/>}/>
  </Routes>
  </BrowserRouter>
}
