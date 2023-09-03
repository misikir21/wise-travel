import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/homepage';
import Login from './pages/Login';
import Pagenotfound from './pages/Pagenotfound';
import AppLayout from './pages/AppLayout';
import CityList from './pages/CityList';
const baseurl="http://localhost:9000"
import { useEffect, useState } from 'react';
export default function App() {
  const [cites,setcites]=useState([]);
  const [isloading,setisloading]=useState(false)
  useEffect(
    function(){
      async function fetchcites(){
        try{
          setisloading(true);
          const res=await fetch(`${baseurl}/cities`);
          const data=await res.json();
          setcites(data);
        }
        catch{
          alert("there is an error in loading data")
        }
        finally{
          setisloading(false)
        }
      }
      fetchcites();
    },[]
  )
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path="Product" element={<Product/>} />
    <Route path="Price" element={<Pricing/>}/>
    <Route path="app" element={<AppLayout/>}>
    <Route index element={<CityList cities={cites} isloading={isloading}/>}/>
    <Route path='cities' element={<CityList cities={cites} isloading={isloading}/>}/>
    <Route path='country' element={<p>list of country you visited</p>}/>
    <Route path='form' element={<p>form</p>}/>
    
    
    </Route>
    <Route path="login" element={<Login/>}/>
    <Route path="*" element={<Pagenotfound/>}/>
  </Routes>
  </BrowserRouter>
}
