import React from 'react';
import Header from './component/Header.jsx';
import Navbar from './component/Navbar.jsx';
import Services from './component/Services.jsx';
import Protfolio from './component/Protfolio.jsx';
import Contact from './component/Contact.jsx';
import Footer from './component/Footer.jsx';

function App() {

  return (
    <div className="App">

      <Navbar />
      <Header />
      <Services />
      <Protfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
