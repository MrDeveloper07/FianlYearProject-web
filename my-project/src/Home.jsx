import React from 'react';
import Spline from '@splinetool/react-spline';
import img from './assets/logo.png'
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="text-red-500">Something went wrong while loading the Spline scene.</h1>;
    }

    return this.props.children; 
  }
}

export default function Home() {
  return (
    <ErrorBoundary>
      <div className="relative w-screen h-screen overflow-hidden">
      <Spline
        scene="https://prod.spline.design/Bn2XFBgRM9j79zDd/scene.splinecode" 
      />
        <div className=" flex items-center justify-center">
        <h1 className="absolute bottom-40 text-white text-3xl  font-bold font-display bg-opacity-50 p-4 neon-text">
        Create, Innovate, and Automate with Unigen AI
</h1>
<div className="absolute top-10 left-10" >
  <img src={img} alt="" className='w-56' />
</div>
<div className="absolute top-12 right-40  w-24 h-10 border-2  hover:text-black text-[#00ffff] border-[#00ffff] hover:border-black hover:bg-[#00ffff] rounded-3xl text-center justify-center items-center flex">
 
    <span className='font-serif font-semibold'> Login</span>
 
</div>
<div className="absolute top-12  right-10  w-24 h-10 border-2  hover:text-black text-[#00ffff] border-[#00ffff] hover:border-black hover:bg-[#00ffff] rounded-3xl text-center justify-center items-center flex">
 
 <span className='font-serif font-semibold'> Sign Up</span>

</div>
<div className="caption absolute bottom-36 text-white text-lg">
  <span>"Unigen AI empowers creators, developers, and innovators with advanced AI tools designed to streamline your workflow and elevate your creative potential."</span>
</div>
<div className="btnexplore absolute bottom-16">
<button class="
        group
        p-5
        cursor-pointer 
        relative  
        text-xl 
        font-normal 
        border-0 
        flex 
        items-center 
        justify-center
        bg-transparent
         text-[#00ffff] 
         h-auto  
         w-[170px]  
         overflow-hidden   
         transition-all
         duration-100">
        <span class="
        group-hover:w-full
        absolute 
        left-0 
        h-full 
        w-5 
        border-y-2
        border-l-2
         border-[#00ffff]
           transition-all
         duration-500">
        </span>

        <p class="group-hover:opacity-0 group-hover:translate-x-[-100%] font-display absolute translate-x-0 transition-all
         duration-200">Explore Here</p>

        <span class="group-hover:translate-x-0  group-hover:opacity-100 absolute font-display  translate-x-full opacity-0  transition-all duration-200">Let's Go
        </span>

        <span
            class="group-hover:w-full absolute right-0 h-full w-5   border-y-2 border-r-2  border-[#00ffff] transition-all duration-500">
        </span>
    </button>
</div>

        </div>
      </div>
    </ErrorBoundary>
  );
}
