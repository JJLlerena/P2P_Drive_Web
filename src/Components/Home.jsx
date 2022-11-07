import Screen from '../images/Screen.png';




function Home(){
  return (
    // neeed to make css file for page defaults.
    // additional pages can be modified using tailwind 
    // sm md lg at least
    <div className="Home">      
      <div class="flex flex-row h-auto w-fit mx-auto ">
        <div class="w-fit ">
          <h1 class=' w-32 mt-24 pt-24  text-sm text-bold font-bold  text-left m:text-6xl '> Decentralized access to your content</h1>
          <h2 class='pt-5 text-left text-s'>Save and upload your files using blockchain technology</h2>       
          <a href="/#"
            class="bg-navy-blue rounded-sm py-2 px-14">
            <span class=' text-lg text-yellow-400'>Login</span>
          </a>
          <a href="/register"
            class='bg-navy-blue rounded-sm  py-2 px-14 ml-10 '>
            <span class=' text-lg text-yellow-400'>Register</span>
          </a>
        </div>
        <img class=" Object-fill h-fill w-fill ml-10 pt-20 pl-40"src={Screen} alt="background" />
      </div>
    </div>
  );
};

export default Home;
