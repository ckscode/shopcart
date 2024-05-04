import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cards from './Components/Cards';
import 'bootstrap-icons/font/bootstrap-icons.css';
const App = () => {
const [items,setItems] = useState(0);

const data = [{
  id:0,
  product:"Fancy Product",
  rate:"$40.00 - $80.00",
  sale:false,
  popular:false,
  offer:false
},{
  id:1,
  product:"Special Item",
  oldrate:"$20.00",
  rate:"$18.00",
  sale:true,
  popular:true,
  offer:true
},{
  id:2,
  product:"Sale Item",
  oldrate:"$50.00",
  rate:"$25.00",
  sale:true,
  popular:false,
  offer:true
},{
  id:3,
  product:"Popular Item",
  rate:"$40.00",
  sale:false,
  popular:true,
  offer:false
},{
  id:4,
  product:"Sale Item",
  oldrate:"$50.00",
  rate:"$25.00",
  sale:true,
  popular:false,
  offer:true
},{
  id:5,
  product:"Fancy Product",
  rate:"$120.00 - $280.00",
  sale:false,
  popular:false,
  offer:false
},{
  id:6,
  product:"Special Item",
  oldrate:"$20.00",
  rate:"$18.00",
  sale:true,
  popular:true,
  offer:true
},{
  id:7,
  product:"Popular Item",
  rate:"$40.00",
  sale:false,
  popular:true,
  offer:false
},]

  return (
    <>
    <Navbar items = {items}/>
    <Header/>
    <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                 <Cards  items = {items} setItems={setItems} data={data}/>
                </div>
            </div>
   </section>
    <Footer/>
    </>
  );
};

export default App;