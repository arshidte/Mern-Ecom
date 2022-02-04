import React from 'react';
import Announcements from '../Components/Announcements';
import Category from '../Components/Category';
import Navbar from '../Components/Navbar';
import Products from '../Components/Products';
import Slider from '../Components/Slider';

const Home = () => {
  return <div>
    <Announcements />
    <Navbar />
    <Slider />
    <Category />
    <Products />
  </div>;
};

export default Home;
