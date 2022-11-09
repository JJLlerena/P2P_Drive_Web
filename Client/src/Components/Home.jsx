import Screen from '../images/Screen.png';




function Home(){
  return (
    // neeed to make css file for page defaults.
    // additional pages can be modified using tailwind 
    // sm md lg at least
         
      <div class="flex h-auto w-auto  mt-28 justify-center  ">
        <div>
          <h1 class='text-2xl text-bold font-bold text-left  '> Decentralized access to your content</h1>
          <h2 class='pt-2 pb-5 text-left text-s'>Save and upload your files using blockchain technology</h2>       
          <a href="/#"
            class="bg-navy-blue rounded-sm py-2 px-8">
            <span class=' text-lg text-yellow-400'>Login</span>
          </a>
          <a href="/register"
            class='bg-navy-blue rounded-sm  py-2 px-6 ml-5  '>
            <span class=' text-lg text-yellow-400'>Register</span>
          </a>
        </div>
        <div> 
          <img class=" Object-fill  "src={Screen} alt="background" />
        </div>
        
      </div>
    
  );
};

export default Home;
