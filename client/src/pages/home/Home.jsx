import React from 'react'
import { useEffect,useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/banner/Hero'
import Features from '../../components/feature/Features'
import Products from '../../components/products/Products'
import Banner2 from '../../components/banner2/Banner2'
import Banners from '../../components/banners/Banners'
import Footer from '../../components/footer/Footer'
import Newcollection from '../../components/newcollection/Newcollection'
import {fetchApiData} from '../../api/Api'
const Home = ({addToCart,cart}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    getCategory();
  }, []);


  const getCategory=()=>{
    fetchApiData('/api/categories?populate=*').then((res)=>{
      console.log(res);
    })
  }
  return (
    <>
      <Navbar show={setShow} size={cart.length}/>
      <Hero/>
      <Features/>
      <Products addToCart={addToCart} cart={cart}/>
      <Banner2/>
      <Newcollection addToCart={addToCart}/>
      <Banners/>
      <Footer/>
    </>
  )
}

export default Home
