import {UserCircleIcon} from "@heroicons/react/24/outline";
import Screen from "../images/Screen.png";
function About() {
    return(
    <div className="About">
        <h1 class='mt-10 w-86 text-4xl text-center pb-5'>ABOUT US</h1>
          <p class='w-auto px-auto mx-32 text-xl text-center'>Here at FIU we are given the opportunity to work on new and exciting. 
          P2P Drive is a the perfect opportunity to enhance our skills and enhance our development. 
          This project focuses on creating a decentralized file sharing system, 
          storing fragments of your personalized files accross multiple nodes.</p>
          <div class='box-border h-32 w-96 px-auto border-4 mx-auto'>
               <h1 class="">Good</h1>
               <UserCircleIcon className="h-6 w-6"src={Screen}/>

          </div>
        
    </div>
    )
}

export default About