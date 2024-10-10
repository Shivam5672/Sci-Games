import React, { useEffect, useState } from 'react'
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Games from './components/Games';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, [])
  return (

    <>
      {
        loading ? (
          <Loader />
        ) :
          (
            <>
              <div className='app'>
                <Navbar />
                <Hero />
                <Games />
                <Footer />
              </div>
            </>
          )
      }
    </>

  )
}

export default App
