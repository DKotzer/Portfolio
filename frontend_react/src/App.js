import React from "react";


import { About, Footer, Header, Skills, Testimonial, Work } from "./containers";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Work></Work>
      <Skills></Skills>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}
