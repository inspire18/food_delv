import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";
// import Bk from "../assest/Birthday-cake-with-flowers.png"
import dg from "../assest/carrot red per kg - vegetables.jpg"
import paneer from "../assest/cauliflower 1 pc - vegetables.jpg"
// import sandweech from "../assest/Sandwich1.png"
//  import TbCircleArrowUpRightFilled from "react-icons/tb"

const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  // const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetable",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">

        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            The Fasted Delivery in{" "}
            <span className="text-red-600 text-">Your Home</span>
          </h2>

          
          <h2 className="text-4xl md:text-3xl font-bold py-3">
            Our Promise: Speed, Precision, and Satisfaction. Elevate your delivery experience with Rapiddrop.io

          </h2>
          <p  className="text-1xl md:text-2xl  py-4 mx-7 ">Indulge in culinary delights from the comfort of your home</p>
          <p  className="text-1xl md:text-2xl  py-4  mx-7">Elevate your dining experience with our online food delivery service</p>
          
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
        
            <div className="md:w-1/2 flex flex-wrap gap-3 p-4 justify-center">
              <img src={dg} alt="loading.." srcSet=""/>

            </div>
            
            
            <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
              <img src={paneer} alt="loading.." srcSet=""/>

            </div>
            
          
              
              
        </div>
       
      </div>

      <div>
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-4">
            {}
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div> 
        </div>
        <div className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all" ref={slideProductRef}>
        
        {homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id+"vegetable"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el,index) => (
                <CardFeature loading="Loading..." key={index+"cartLoading"} />
              ))}
        </div>
      </div>

      <AllProduct heading={"Your Product"}/>





    </div>

  )
}

export default Home
