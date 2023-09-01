 import { useState } from 'react'

 import Navbar from './pages/Navbar'

import Hero from './pages/Hero'
import ProductGrid from './pages/ProductGrid';
import SummerStylesBanner from './pages/SummerStylesBanner'
import CollectionsSection from './pages/CollectionsSection'
import Footer from './pages/Footer';
function App() {
 


  return (
  <>
  
 <Navbar />
  
  {/* <Hero /> */}
  <div className=' mt-6'>
    <SummerStylesBanner />
    </div>
  <CollectionsSection />
  
  <ProductGrid />
  <ProductGrid />
  <Footer />
  </>
  );
};

export default App
