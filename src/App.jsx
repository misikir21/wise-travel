import { BrowserRouter, Routes,Route } from 'react-router-dom';
import product from './pages/product';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='product' element={<product/>} />
  </Routes>
  </BrowserRouter>
}
