import React from 'react';
import Header from '../components/header/Header';
import Navbar from '../components/nav/Navbar';

const Main = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <section>
        <div>S/ plano</div>
        <div>C/ plano</div>
      </section>
      <footer>FOOTER</footer>
    </div>
  );
};

export default Main;
