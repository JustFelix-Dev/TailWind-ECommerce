import { useState,useRef } from "react";

function App() {

   const myRef2 = useRef();
   
   const handleClick=()=>{
    if(myRef2.current.classList.contains('hidden')){
      myRef2.current.classList.remove('hidden');
    }else{
      myRef2.current.classList.add('hidden');
    }
   }

  return (
    <>
       <div className="grid md:grid-cols-3">  
   <div className="md:flex md:justify-end"> 
    <nav className="text-right">
      <div className="flex justify-between items-center">
        <h1 className="font-bold uppercase p-4">
          <a href="/" className="text-red-800">African Dishes</a>
        </h1>
        <div  onClick={handleClick} className="px-4 cursor-pointer">
        <svg fill="none" className="w-6" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
        </svg>
        </div>

      </div>
      <ul  ref={myRef2} className="hidden md:block">
        <li className="py-1 border-r-4 border-red-700">
          <a href="#" className="flex justify-end">
            <span className="text-gray-700 font-semibold">Home</span>
            <svg className="w-5 ml-2 mr-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
          </svg>
          </a>
        </li>
        <li className="py-1 border-r-4 border-white">
          <a href="#" className="flex justify-end">
            <span>About</span>
            <svg fill="none" className="w-5  ml-2 mr-3" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path>
        </svg>
          </a>
        </li> 
         <li className="py-1 border-r-4 border-white">
          <a href="#" className="flex justify-end">
            <span>Contact</span>
            <svg fill="none" className="w-5 ml-2 mr-3" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"></path>
          </svg>
          </a>
        </li>
        <li className="py-1 border-r-4 border-white">
          <a href="#" className="flex justify-end">
            <span>Cart</span>
            <svg fill="none" className="w-5 ml-2 mr-3" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
</svg>
          </a>
        </li>
      </ul>
    </nav>
   </div>

   <main className="px-16 py-6 bg-yellow-100 md:col-span-2">
     <div className="flex justify-center md:justify-end lg:text-red-600 ">
      <a href="#" className="btn border-red-700 md:border-2 transition ease-in-out duration-500 hover:bg-red-800 hover:text-white">Log in</a>
      <a href="#" className="ml-2 btn  border-red-700 md:border-2 transition ease-in-out duration-500 hover:bg-red-800 hover:text-white">Sign up</a>
     </div>

     <header>
      <h2 className="font-semibold text-6xl first-letter:text-red-800">African Dishes</h2>
     </header>

     <div>
      <h4 className="font-bold mt-12 pb-2 border-b-2 border-green-500">Latest Dishes</h4>
      <div className="mt-8 grid lg:grid-cols-3 gap-8">
        {/* Cards */}
        <div className="card" >
          <img src="img/Pounded_yam.jpg" alt="" className="w-full h-32 sm:h-48 object-cover"/>
          <div className="m-2">
            <span className="font-bold">Pounded Yam</span>
            <span className="block text-gray-500 text-sm">Add to Cart</span>
          </div>
          <div className="badge" >
          <svg className="w-5 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
            <span >25 min</span>
          </div>
        </div>
        <div className="card" >
          <img src="img/Jollof_Rice.jpg" alt="" className="w-full h-32 sm:h-48 object-cover"/>
          <div className="m-2">
            <span className="font-bold">Jollof Rice</span>
            <span className="block text-gray-500 text-sm">Add to Cart</span>
          </div>
          <div className="badge" >
          <svg className="w-5 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
            <span >25 min</span>
          </div>
        </div>
        <div className="card" >
          <img src="img/Beans.jpg" alt="" className="w-full h-32 sm:h-48 object-cover"/>
          <div className="m-2">
            <span className="font-bold">Beans</span>
            <span className="block text-gray-500 text-sm">Add to Cart</span>
          </div>
          <div className="badge" >
          <svg className="w-5 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
            <span >25 min</span>
          </div>
        </div>
        <div className="card" >
          <img src="img/Amala.jpg" alt="" className="w-full h-32 sm:h-48 object-cover"/>
          <div className="m-2">
            <span className="font-bold">Amala</span>
            <span className="block text-gray-500 text-sm">Add to Cart</span>
          </div>
          <div className="badge" >
          <svg className="w-5 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
            <span >25 min</span>
          </div>
        </div>
        <div className="card" >
          <img src="img/Beans_porridge.webp" alt="" className="w-full h-32 sm:h-48 object-cover"/>
          <div className="m-2">
            <span className="font-bold">Beans Porridge</span>
            <span className="block text-gray-500 text-sm">Add to Cart</span>
          </div>
          <div className="badge" >
          <svg className="w-5 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
            <span >25 min</span>
          </div>
        </div>
        <div className="card" >
          <img src="img/Afang.jpg" alt="" className="w-full h-32 sm:h-48 object-cover"/>
          <div className="m-2">
            <span className="font-bold">Afang</span>
            <span className="block text-gray-500 text-sm">Add to Cart</span>
          </div>
          <div className="badge" >
          <svg className="w-5 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
            <span >25 min</span>
          </div>
        </div>
        <div className="card" >
          <img src="img/Fried Rice.webp" alt="" className="w-full h-32 sm:h-48 object-cover"/>
          <div className="m-2">
            <span className="font-bold">Fried Rice</span>
            <span className="block text-gray-500 text-sm">Add to Cart</span>
          </div>
          <div className="badge" >
          <svg className="w-5 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
            <span >25 min</span>
          </div>
        </div>
        <div className="card" >
          <img src="img/Suya.jpg" alt="" className="w-full h-32 sm:h-48 object-cover"/>
          <div className="m-2">
            <span className="font-bold">Suya</span>
            <span className="block text-gray-500 text-sm">Add to Cart</span>
          </div>
          <div className="badge" >
          <svg className="w-5 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
            <span >25 min</span>
          </div>
        </div>
        <div className="card" >
          <img src="img/Akara.jpg" alt="" className="w-full h-32 sm:h-48 object-cover"/>
          <div className="m-2">
            <span className="font-bold">Akara</span>
            <span className="block text-gray-500 text-sm">Add to Cart</span>
          </div>
          <div className="badge" >
          <svg className="w-5 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
            <span >25 min</span>
          </div>
        </div>
        <div className="card" >
          <img src="img/Beans_pudding.jpg" alt="" className="w-full h-32 sm:h-48 object-cover"/>
          <div className="m-2">
            <span className="font-bold">Beans Pudding</span>
            <span className="block text-gray-500 text-sm">Add to Cart</span>
          </div>
          <div className="badge" >
          <svg className="w-5 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
            <span >25 min</span>
          </div>
        </div>
        <div className="card" >
          <img src="img/Egusi_soup.jpg" alt="" className="w-full h-32 sm:h-48 object-cover"/>
          <div className="m-2">
            <span className="font-bold">Egusi Soup</span>
            <span className="block text-gray-500 text-sm">Add to Cart</span>
          </div>
          <div className="badge" >
          <svg className="w-5 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
            <span >25 min</span>
          </div>
        </div>
        <div className="card" >
          <img src="img/Ogbono_soup.jpg" alt="" className="w-full h-32 sm:h-48 object-cover"/>
          <div className="m-2">
            <span className="font-bold">Ogbono Soup</span>
            <span className="block text-gray-500 text-sm">Add to Cart</span>
          </div>
          <div className="badge" >
          <svg className="w-5 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
            <span >25 min</span>
          </div>
        </div>
      </div>

      <h4 className="font-bold mt-12 pb-2 border-b-2 border-green-500">Most Popular</h4>

      <div className="mt-8 grid lg:grid-cols-3 gap-8">
        {/* Cards */}
        <div className="card" >
          <img src="img/Pounded_yam.jpg" alt="" className="w-full h-32 sm:h-48 object-cover"/>
          <div className="m-2">
            <span className="font-bold">Pounded Yam</span>
            <span className="block text-gray-500 text-sm">Add to Cart</span>
          </div>
          <div className="badge" >
          <svg className="w-5 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
            <span >25 min</span>
          </div>
        </div>
        <div className="card" >
          <img src="img/Jollof_Rice.jpg" alt="" className="w-full h-32 sm:h-48 object-cover"/>
          <div className="m-2">
            <span className="font-bold">Jollof Rice</span>
            <span className="block text-gray-500 text-sm">Add to Cart</span>
          </div>
          <div className="badge" >
          <svg className="w-5 inline-block" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
            <span >25 min</span>
          </div>
        </div>
      
      </div>

      <div className="flex mt-5 justify-center">
        <div className=" btn text-base bg-gray-400 p-2 rounded-lg" >Load More</div>
      </div>
     </div>
   </main>
    </div>

    
    </>
  )
}

export default App ;
