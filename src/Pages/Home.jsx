import React from 'react';
import Announcements from '../Components/Announcements';
import Category from '../Components/Category';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
import Products from '../Components/Products';
import Slider from '../Components/Slider';

const Home = () => {
  return <div>
    <Announcements />
    <Navbar />
    <Slider />
    <Category />
    <Products />
    <Newsletter />
    <Footer />
  </div>;
};

export default Home;
