
import Screen from '../images/Screen.png';

import Navbar from '../Navigation/Navbar'


function Home(){
  return ( 
    <
    <div className='Home'>
        <div class="flex h-auto w-auto justify-center mt-20 md:mt-32  ">
          <div className=" flex-col  md:mr-40 md:w-80">
            <h1 class='text-3xl md:text-5xl lg:text-6xl font-bold text-center md:text-left  '> Decentralized access to your content</h1>
            <h2 class='py-3 text-base text-center  md:text-left md:font-semibold  md:text-xl    '>Save and upload your files using blockchain technology</h2>       
            {/*Register & Login Buttons*/}
            <div classname="reg-log-button" class='flex mb-10 md:mt-5  justify-center md:justify-start'>
              <a href="/login"
                class="bg-navy-blue rounded-sm py-2 px-10">
                <span class=' text-lg text-yellow-400'>Login</span>
              </a>
              <a href="/register"
                class='bg-navy-blue rounded-sm  py-2 px-10 ml-5  '>
                <span class=' text-lg text-yellow-400'>Register</span>
              </a>
            </div>
            {/*Mobile image*/}
            <img class=" Object-fill px-3 md:hidden "src={Screen} alt="background" />
          </div>
          <div> 
            {/*Desktop image*/}
            <img class=" Object-fill hidden md:block"src={Screen} alt="background" /> 
          </div>
          
        </div>
      </div>
    
  );
};


export default Home;
